import { makeAutoObservable } from "mobx";
import WalletStore from "./WalletStore";
import TokenStore from "./TokenStore";

class RootStore {
  walletStore = null;
  tokenStore = null;
  constructor() {
    makeAutoObservable(this, { transport: false });
    this.walletStore = new WalletStore();
    this.tokenStore = new TokenStore(this.walletStore);
    this.connect(); // This is temporary, user should initiate.
  }
  async connect() {
    await this.walletStore.connect();
    await this.tokenStore.connect();
  }
}

export default RootStore;
