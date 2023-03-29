import { ethers } from "hardhat";

// DEMO 0x5fbdb2315678afecb367f032d93f642f64180aa3

async function main() {
  const Demo = await ethers.getContractFactory("Demo");
  const demo = await Demo.deploy();

  await demo.deployed();
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });