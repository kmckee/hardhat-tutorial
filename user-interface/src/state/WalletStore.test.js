import WalletStore from "./WalletStore";
import TransportMock from "./Transport.mock";

// TODO: It warns about using the wrong network.
// TODO: It subscribes to window.ethereum.on("accountsChanged", and updates.
// TODO: It subscribes to window.ethereum.on("networkChanged", ( and updates.

describe("WalletStore", () => {
  let subject;
  let transport;
  beforeEach(() => {
    transport = new TransportMock();
    subject = new WalletStore(transport);
  });
  describe("connect", () => {
    it("sets walletDetected to true", async () => {
      transport.walletDetected.mockReturnValue(true);
      await subject.connect();
      expect(subject.walletDetected).toBe(true);
    });
    it("sets walletDetected to false", async () => {
      transport.walletDetected.mockReturnValue(false);
      await subject.connect();
      expect(subject.walletDetected).toBe(false);
    });
    it("updates the address", async () => {
      transport.getAddress.mockReturnValue(Promise.resolve("0xKYLE"));
      await subject.connect();
      expect(subject.address).toBe("0xKYLE");
    });
    it("does not try to get an address when a wallet is not detected", async () => {
      transport.walletDetected.mockReturnValue(false);
      await subject.connect();
      expect(transport.getAddress).not.toHaveBeenCalled();
    });
    it("sets the signer", async () => {
      transport.getSigner.mockReturnValue(Promise.resolve("0xKYLE"));
      await subject.connect();
      expect(subject.signer).toBe("0xKYLE");
    });
  });
});
