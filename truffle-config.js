const path = require("path");
require('dotenv').config({ path: './.env' });
const HDWalletProvider = require("@truffle/hdwallet-provider");
const MetaMaskAccountIndex = 0;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: 1337
    },
    ganache_local: {
      provider: function () {
        return new HDWalletProvider(process.env.MNEMONIC, "http://127.0.0.1:8545", MetaMaskAccountIndex)
      },
      network_id: 1337
    },
    goerli_infura: {
      provider: function () {
        return new HDWalletProvider(process.env.MNEMONIC, "wss://goerli.infura.io/ws/v3/f8165da72cd2497b8bbba73101c9501b", MetaMaskAccountIndex)
      },
      network_id: 5
    },
    ropsten_infura: {
      provider: function () {
        return new HDWalletProvider(process.env.MNEMONIC, "https://ropsten.infura.io/ws/v3/f8165da72cd2497b8bbba73101c9501b", MetaMaskAccountIndex)

      },
      networkCheckTimeoutnetworkCheckTimeout: 10000,
      timeoutBlocks: 200,
      network_id: 3
    }
  },
  compilers: {
    solc: {
      version: "0.6.0"
    }
  }
};
