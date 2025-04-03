// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Lock {
    struct LockInfo {
        uint256 amount;
        uint256 unlockTime;
        address user;
        bool isUnlocked;
    }

    uint256 private lockCount;
    mapping(uint256 => LockInfo) private lockMap;
    event TokenLocked(address indexed user, uint256 id, uint256 amount, uint256 unlockTime);
    event TokenUnlocked(address indexed user, uint256 id, uint256 amount);

    function getLockInfo(uint256 id) public view returns (LockInfo memory) {
        // msg.sender;
        // block.timestamp;
        // block.number;
        return lockMap[id];
    }

    function lockTokens(uint _minutes) public payable {
        require(_minutes > 0, "Lock period must be greater than 0 minutes");
        require(msg.value > 0, "Must lock some tokens");
        
        uint lockPeriod = _minutes * 1 minutes;
        uint newUnlockTime = block.timestamp + lockPeriod;

        lockMap[lockCount] = LockInfo({
            amount: msg.value,
            unlockTime: newUnlockTime,
            user: msg.sender,
            isUnlocked: false
        });
        
        emit TokenLocked(msg.sender, lockCount, msg.value, newUnlockTime);
        lockCount++;
    }
    
    function unlock(uint256 id) public {
        LockInfo storage userLock = lockMap[id];
        require(userLock.amount > 0, "No tokens locked");
        require(block.timestamp >= userLock.unlockTime, "Tokens are still locked");
        require(userLock.user == msg.sender, "You are not the owner of this lock");
        require(userLock.isUnlocked == false, "Tokens are already unlocked");

        userLock.isUnlocked = true;

        (bool success,) = payable(address(msg.sender)).call{value: userLock.amount}("");
        require(success, "Transfer failed");
        
        emit TokenUnlocked(msg.sender, id, userLock.amount);
    }
}
