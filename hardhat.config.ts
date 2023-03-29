import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import './tasks/sample_tasks';
import 'hardhat-deploy';
import "@nomiclabs/hardhat-ethers";
//import 'typechain-types';
//import 'hardhat-deploy-ethers';

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  namedAccounts: {
    deployer: 0,
    user: 1,
  }
};

export default config;
