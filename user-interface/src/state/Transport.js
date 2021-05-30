import { ethers } from "ethers";
// This is intended to be a thin wrapper over the ethereum global to make testing easier.
// Going to punt on testing this as it feels like the juice isn't worth the squeeze.
class Transport {
  constructor() {}
  walletDetected() {
    return window.ethereum !== undefined;
  }
  async getAddress() {
    const [address] = await window.ethereum.enable();
    return address;
  }
  async getSigner() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    return await provider.getSigner(0);
  }
}

export default Transport;
