import { makeAutoObservable } from "mobx";
import { ethers } from "ethers";

class WalletStore {
  walletDetected = false;
  address = null;
  error = null;
  provider = null;
  constructor() {
    makeAutoObservable(this);
  }
  async connect() {
    this.walletDetected = window.ethereum !== undefined;
    const [address] = await window.ethereum.enable();
    this.address = address;
    this.provider = new ethers.providers.Web3Provider(window.ethereum);
  }
  async disconnect() {
    this.walletDetected = window.ethereum !== undefined;
    await window.ethereum.disable();
    this.address = null;
    this.provider = null;
  }
  get isConnected() {
    return this.address !== null;
  }
}
// TODO ?
// State:
// networkError - how do i let the user know if something went wrong.

// Subscriptions:
// Listen for the user to change metamask config and handle it here?
// window.ethereum.on("accountsChanged")
// window.ethereum.on("networkChanged")

export default WalletStore;
