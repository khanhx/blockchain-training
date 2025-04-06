import { ethers, upgrades } from "hardhat";

async function main() {
  const LockV2 = await ethers.getContractFactory("Lock");
  const lock = await upgrades.upgradeProxy('0x53EbB2e255e8eBecc3048E6727Ec47577cC91d64', LockV2);
  console.log("Lock upgraded");
}

main();
