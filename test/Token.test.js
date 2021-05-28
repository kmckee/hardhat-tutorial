const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token contract", function () {
  const TOTAL_SUPPLY = 1000000;
  let owner, alice, bob, token;
  beforeEach(async () => {
    [owner, alice, bob] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("Token");
    token = await Token.deploy();
  });
  it("has a total supply of 1,000,000", async () => {
    expect(await token.totalSupply()).to.equal(TOTAL_SUPPLY);
  });
  it("assigns the total supply of tokens to the owner", async () => {
    const ownerBalance = await token.balanceOf(owner.address);
    expect(ownerBalance).to.equal(TOTAL_SUPPLY);
  });
  it("can transfer tokens from owner to alice", async () => {
    await token.transfer(alice.address, 50);
    expect(await token.balanceOf(alice.address)).to.equal(50);
  });
  it("can transfer tokens from alice to bob", async () => {
    await token.transfer(alice.address, 50);

    await token.connect(alice).transfer(bob.address, 20);

    expect(await token.balanceOf(bob.address)).to.equal(20);
    expect(await token.balanceOf(alice.address)).to.equal(30);
  });
  it("fails if the sender doesnt have enough tokens", async () => {
    const initialOwnerBalance = await token.balanceOf(owner.address);
    const initialAliceBalance = await token.balanceOf(alice.address);

    await expect(
      token.connect(alice).transfer(owner.address, 1)
    ).to.be.revertedWith("Not enough tokens");

    expect(await token.balanceOf(owner.address)).to.equal(initialOwnerBalance);
    expect(await token.balanceOf(alice.address)).to.equal(initialAliceBalance);
  });
});
