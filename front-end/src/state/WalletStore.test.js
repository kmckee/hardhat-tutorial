import WalletStore from "./WalletStore";
// TODO: It warns about using the wrong network.
// TODO: It subscribes to window.ethereum.on("accountsChanged", and updates.
// TODO: It subscribes to window.ethereum.on("networkChanged", ( and updates.

describe("WalletStore", () => {
  let subject;
  beforeEach(() => {
    subject = new WalletStore();
  });
  it("sets connected to true when an address is set", () => {
    subject.address = '0xKYLE"';
    expect(subject.isConnected).toBe(true);
  });
  it("sets connected to false when an address is not set", () => {
    subject.address = null;
    expect(subject.isConnected).toBe(false);
  });
  describe("connect", () => {
    // Transport abstraction kind of sucked.  But these tests were good.
    // need to find a better abstractino so i can get good coverage of the
    // store without needing to mock ethers.
    // it("sets walletDetected to true", async () => {
    //   transport.walletDetected.mockReturnValue(true);
    //   await subject.connect();
    //   expect(subject.walletDetected).toBe(true);
    // });
    // it("sets walletDetected to false", async () => {
    //   transport.walletDetected.mockReturnValue(false);
    //   await subject.connect();
    //   expect(subject.walletDetected).toBe(false);
    // });
    // it("updates the address", async () => {
    //   transport.getAddress.mockReturnValue(Promise.resolve("0xKYLE"));
    //   await subject.connect();
    //   expect(subject.address).toBe("0xKYLE");
    // });
    // it("does not try to get an address when a wallet is not detected", async () => {
    //   transport.walletDetected.mockReturnValue(false);
    //   await subject.connect();
    //   expect(transport.getAddress).not.toHaveBeenCalled();
    // });
    // it("sets the signer", async () => {
    //   transport.getSigner.mockReturnValue(Promise.resolve("0xKYLE"));
    //   await subject.connect();
    //   expect(subject.signer).toBe("0xKYLE");
    // });
  });
});
