import { ethers } from "hardhat";

async function main() {
 const [account] = await ethers.getSigners();
 
 const Demo = await ethers.getContractFactory('Demo', account);
 const demo = Demo.attach('0x5FbDB2315678afecb367f032d93F642f64180aa3');
      
 const tx = await demo.pay(`Hello from ${account}`, {value: 3000});
 await tx.wait();

 console.log(await demo.message());
 console.log((await ethers.provider.getBalance(demo.address)).toString());

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

