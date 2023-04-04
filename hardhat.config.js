require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");

const BNBt_PRIVATE_KEY = process.env.BNB_PRIVATE_KEY
const BNBT_rpc_url = process.env.BNB_rpc_url
const api_key = process.env.api_key
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    bnbt: {
      url: BNBT_rpc_url,
      accounts: [BNBt_PRIVATE_KEY],
      chainId: 97, 
    },
    
  },
  gasReporter: {
    enabled: true,
    outputFile: 'gasreporter.txt',
    noColors:true,
  },
  etherscan: {
    apiKey: api_key,
  },
  solidity: "0.8.18",

};
