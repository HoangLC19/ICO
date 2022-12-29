// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat")
require("dotenv").config({path: "./.env"})
const {CRYPTO_DEVS_NFT_CONTRACT_ADDRESS} = require("../constants")

async function main() {
  const cryptoDevsNFTContract = CRYPTO_DEVS_NFT_CONTRACT_ADDRESS;
  const cryptoDevTokenContract = await ethers.getContractFactory("CryptoDevToken");
  const cryptoDevToken = await cryptoDevTokenContract.deploy(cryptoDevsNFTContract);
  await cryptoDevToken.deployed();
  console.log("CryptoDevToken deployed to:", cryptoDevToken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
