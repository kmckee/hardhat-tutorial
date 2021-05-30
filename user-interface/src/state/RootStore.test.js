import RootStore from "./RootStore";
import TransportMock from "./Transport.mock";

describe("RootStore", () => {
  it("creates a walletStore", () => {
    const transport = new TransportMock();
    const subject = new RootStore(transport);
    expect(subject.walletStore).toBeDefined();
    expect(subject.walletStore.transport).toBe(transport);
  });
});
