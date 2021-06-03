import RootStore from "./RootStore";

describe("RootStore", () => {
  let subject;
  beforeEach(() => {
    subject = new RootStore();
  });
  it("creates a wallet", () => {
    expect(subject.wallet).toBeDefined();
  });
  it("creates a token", () => {
    expect(subject.token).toBeDefined();
  });
});
