import { makeAutoObservable } from "mobx";
import { ethers } from "ethers";
import TokenArtifact from "../contracts/Token.json";
import contractAddress from "../contracts/contract-address.json";

class TokenStore {
  balance;
  name;
  symbol;
  token;
  wallet;
  constructor(wallet) {
    makeAutoObservable(this);
    this.wallet = wallet;
  }
  async connect() {
    this.token = new ethers.Contract(
      contractAddress.Token,
      TokenArtifact.abi,
      this.wallet.provider
    );
    await this.refresh();
  }
  async refresh() {
    this.name = await this.token.name();
    this.symbol = await this.token.symbol();
    this.balance = await this.token.balanceOf(this.wallet.address);
  }
}

export default TokenStore;
