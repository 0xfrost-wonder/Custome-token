import { ethers } from 'hardhat';

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  
  const MyToken = await ethers.getContractFactory("MyToken");
  const initialSupply = ethers.parseUnits("1000000", 18);
  const Token = await MyToken.deploy(initialSupply);
  await Token.waitForDeployment(); // deploying our contract on network
  console.log('Contract deployed 🎉')
  console.log('Contract address: ', Token.target) // writing contract address to the console
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
