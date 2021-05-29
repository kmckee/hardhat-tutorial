require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.7.3",
  networks: {
    ropsten: {
      url: process.env.ROPSTEN_URL,
      accounts: [`0x${process.env.ROPSTEN_PRIVATE_KEY}`],
    },
  },
};
