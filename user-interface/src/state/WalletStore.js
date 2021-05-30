import { makeAutoObservable } from "mobx";
import { ethers } from "ethers";
import Token from "../contracts/Token.json";
import contractAddress from "../contracts/contract-address.json";

// A Web3Provider wraps a standard Web3 provider, which is
// // what Metamask injects as window.ethereum into each page
// const provider = new ethers.providers.Web3Provider(window.ethereum);

// // The Metamask plugin also allows signing transactions to
// // send ether and pay to change state within the blockchain.
// // For this, you need the account signer...
// const signer = provider.getSigner();

class WalletStore {
  constructor() {
    makeAutoObservable(this);
    // State:
    // walletDetected
    // networkError
    // selectedAddress

    // Actions:
    //

    // Subscriptions:
    // window.ethereum.on("accountsChanged")
    // window.ethereum.on("networkChanged")
  }
}

export default WalletStore;
