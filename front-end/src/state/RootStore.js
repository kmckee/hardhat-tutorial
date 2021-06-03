import { makeAutoObservable } from "mobx";
import WalletStore from "./WalletStore";
import TokenStore from "./TokenStore";

class RootStore {
  wallet = null;
  token = null;
  constructor() {
    makeAutoObservable(this, { transport: false });
    this.wallet = new WalletStore();
    this.token = new TokenStore(this.wallet);
    this.connect(); // This is temporary, user should initiate with a click.
  }
  async connect() {
    await this.wallet.connect();
    await this.token.connect();
  }
}

export default RootStore;
