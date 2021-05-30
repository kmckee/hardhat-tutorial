import { makeAutoObservable } from "mobx";

class RootStore {
  count = 1;
  constructor() {
    makeAutoObservable(this);
  }
  tick() {
    this.count += 1;
  }
}

export default RootStore;
