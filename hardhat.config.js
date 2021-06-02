require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: "0.7.3",
  networks: {
    hardhat: {
      accounts: [
        {
          balance: "10000000000000000000",
          privateKey:
            "0xe8296150a5dfb0eaa1f0aa4fa9f09c43c8b5aee87ad2180d5f54b411da484318",
        },
      ],
    },
    ropsten: {
      url: process.env.ROPSTEN_URL,
      accounts: [`0x${process.env.ROPSTEN_PRIVATE_KEY}`],
    },
  },
};
