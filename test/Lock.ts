import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Lock", function () {
  async function deployLockFixture() {
    const [owner, otherAccount] = await ethers.getSigners();
    const Lock = await ethers.getContractFactory("Lock");
    const lock = await Lock.deploy();
    
    const ONE_GWEI = 1_000_000_000;
    const lockAmount = ONE_GWEI;

    return { lock, owner, otherAccount, lockAmount };
  }

  describe("LockTokens", function () {
    it("Should lock tokens for specified minutes", async function () {
      const { lock, owner, lockAmount } = await loadFixture(deployLockFixture);
      
      const lockMinutes = 1;
      await expect(lock.connect(owner).lockTokens(lockMinutes, { value: lockAmount }))
        .to.emit(lock, "TokenLocked")
        .withArgs(owner.address, lockAmount, anyValue);

      // Check contract balance
      expect(await ethers.provider.getBalance(lock.target)).to.equal(lockAmount);
    });

    it("Should revert if lock period is 0", async function () {
      const { lock, lockAmount } = await loadFixture(deployLockFixture);
      
      await expect(lock.lockTokens(0, { value: lockAmount }))
        .to.be.revertedWith("Lock period must be greater than 0 minutes");
    });

    it("Should revert if no tokens are sent", async function () {
      const { lock } = await loadFixture(deployLockFixture);
      
      await expect(lock.lockTokens(1, { value: 0 }))
        .to.be.revertedWith("Must lock some tokens");
    });

    it("Should revert if user already has locked tokens", async function () {
      const { lock, lockAmount } = await loadFixture(deployLockFixture);
      
      await lock.lockTokens(1, { value: lockAmount });
      await expect(lock.lockTokens(1, { value: lockAmount }))
        .to.be.revertedWith("Already have locked tokens");
    });
  });

  describe("Unlock", function () {
    it("Should unlock tokens after lock period", async function () {
      const { lock, owner, lockAmount } = await loadFixture(deployLockFixture);
      
      // Lock tokens for 1 minute
      await lock.connect(owner).lockTokens(1, { value: lockAmount });
      
      // Increase time by 1 minute
      await time.increase(1 * 60);

      // Check for event emission
      await expect(lock.connect(owner).unlock())
        .to.emit(lock, "TokenUnlocked")
        .withArgs(owner.address, lockAmount);

      // Verify contract balance is 0
      expect(await ethers.provider.getBalance(lock.target)).to.equal(0);
    });

    it("Should transfer correct amount back to user", async function () {
      const { lock, owner, lockAmount } = await loadFixture(deployLockFixture);
      
      // Lock tokens for 1 minute
      await lock.connect(owner).lockTokens(1, { value: lockAmount });
      
      // Increase time by 1 minute
      await time.increase(1 * 60);

      // Check balance changes
      await expect(lock.connect(owner).unlock())
        .to.changeEtherBalances(
          [owner, lock],
          [lockAmount, -lockAmount]
        );
    });

    it("Should revert if no tokens are locked", async function () {
      const { lock } = await loadFixture(deployLockFixture);
      
      await expect(lock.unlock())
        .to.be.revertedWith("No tokens locked");
    });

    it("Should revert if tokens are still locked", async function () {
      const { lock, lockAmount } = await loadFixture(deployLockFixture);
      
      // Lock tokens for 1 minute
      await lock.lockTokens(1, { value: lockAmount });
      
      // Try to unlock immediately
      await expect(lock.unlock())
        .to.be.revertedWith("Tokens are still locked");
    });

    it("Should handle multiple users locking and unlocking", async function () {
      const { lock, owner, otherAccount, lockAmount } = await loadFixture(deployLockFixture);
      
      // Both users lock tokens
      await lock.connect(owner).lockTokens(1, { value: lockAmount });
      await lock.connect(otherAccount).lockTokens(2, { value: lockAmount });
      
      // Increase time by 1 minute
      await time.increase(1 * 60);
      
      // First user can unlock
      await expect(lock.connect(owner).unlock()).to.not.be.reverted;
      
      // Second user still can't unlock
      await expect(lock.connect(otherAccount).unlock())
        .to.be.revertedWith("Tokens are still locked");
      
      // Increase time by another 1 minute
      await time.increase(1 * 60);
      
      // Second user can now unlock
      await expect(lock.connect(otherAccount).unlock()).to.not.be.reverted;
    });
  });

  describe("Edge Cases", function () {
    it("Should handle minimum lock period (1 minute)", async function () {
      const { lock, lockAmount } = await loadFixture(deployLockFixture);
      
      await lock.lockTokens(1, { value: lockAmount });
      await time.increase(60);
      await expect(lock.unlock()).to.not.be.reverted;
    });

    it("Should handle large lock amounts", async function () {
      const { lock } = await loadFixture(deployLockFixture);
      const largeAmount = ethers.parseEther("100");
      
      await expect(lock.lockTokens(1, { value: largeAmount }))
        .to.emit(lock, "TokenLocked")
        .withArgs(anyValue, largeAmount, anyValue);
    });
  });
});
