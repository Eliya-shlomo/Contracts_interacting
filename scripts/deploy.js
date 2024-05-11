const ethers = require('ethers');
require('dotenv').config();

async function main() {

const Contract =  await hre.ethers.getContractFctory("Contract");
const contract = await Contract.deploy();

await contract.deployed();

console.log(`Contract was deployed to ${contract.address}`
);


}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});