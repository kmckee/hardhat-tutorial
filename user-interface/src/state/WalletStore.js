import { makeAutoObservable } from "mobx";
// import { ethers } from "ethers";
// import Token from "../contracts/Token.json";
// import contractAddress from "../contracts/contract-address.json";

// A Web3Provider wraps a standard Web3 provider, which is
// // what Metamask injects as window.ethereum into each page
// const provider = new ethers.providers.Web3Provider(window.ethereum);

// // The Metamask plugin also allows signing transactions to
// // send ether and pay to change state within the blockchain.
// // For this, you need the account signer...
// const signer = provider.getSigner();

class WalletStore {
  walletDetected = false;
  address = null;
  transport = null;
  error = null;
  signer = null;
  constructor(transport) {
    makeAutoObservable(this, { transport: false });
    this.transport = transport;
    // State:
    // networkError

    // Actions:
    // connect / disconnect
    // ?

    // Subscriptions:
    // window.ethereum.on("accountsChanged")
    // window.ethereum.on("networkChanged")
  }
  async connect() {
    this.walletDetected = this.transport.walletDetected();
    if (!this.walletDetected) return;
    this.address = await this.transport.getAddress();
    this.signer = await this.transport.getSigner();
  }
}

export default WalletStore;
