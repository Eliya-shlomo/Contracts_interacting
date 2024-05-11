const ethers = require('ethers');
const CONTRACT_ADDR = "";

async function main() {

const contract  = await hre.ethers.getContractAt("Contract",CONTRACT_ADDR)
await contract.changeX(47);


console.log(`Contract was deployed to ${contract.address}`
);


}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});