import { ethers, upgrades } from "hardhat";

async function main() {
  const Lock = await ethers.getContractFactory("Lock");
  const lock = await upgrades.deployProxy(Lock, []);
  await lock.waitForDeployment();
  console.log("Lock deployed to:", await lock.getAddress());
}

main();
