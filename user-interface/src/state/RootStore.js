import { makeAutoObservable } from "mobx";
import WalletStore from "./WalletStore";

class RootStore {
  count = 1;
  walletStore = null;
  transport = null;
  constructor(transport) {
    makeAutoObservable(this, { transport: false });
    this.transport = transport;
    this.walletStore = new WalletStore(transport);
  }
  tick() {
    this.count += 1;
  }
}

export default RootStore;
