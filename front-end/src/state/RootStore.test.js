import RootStore from "./RootStore";

describe("RootStore", () => {
  it("creates a walletStore", () => {
    const subject = new RootStore();
    expect(subject.walletStore).toBeDefined();
    expect(subject.tokenStore).toBeDefined();
  });
});
