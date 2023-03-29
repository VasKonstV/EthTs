import { task, types } from 'hardhat/config';
import type { Demo } from '../typechain-types';
import { Demo__factory } from '../typechain-types';
import { ethers } from "hardhat";
import { HardhatRuntimeEnvironment } from "hardhat/types";

async function main() {
 const [account] = await ethers.getSigners();
 const demo = await ethers.getContract<Demo>('Demo', account);
      
 const tx = await demo.pay(`Hello from ${account}`, {value: 3000});
 await tx.wait();

 console.log(await demo.message());
 console.log((await ethers.provider.getBalance(demo.address)).toString());

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

