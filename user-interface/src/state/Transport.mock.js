// This is intended to give a sane default mock for the transport layer,
// so that each test doesn't need to build it from scratch.

class TransportMock {
  constructor(overrides = {}) {
    const defaults = {
      walletDetected: jest.fn(() => true),
      getAddress: jest.fn(() => Promise.resolve("0xKYLE")),
      getSigner: jest.fn(() => Promise.resolve("0xKYLE")),
    };
    Object.assign(this, defaults, overrides);
  }
}

export default TransportMock;
