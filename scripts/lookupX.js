const ethers = require('ethers');
const CONTRACT_ADDR = "";

async function main() {

const contract  = await hre.ethers.getContractAt("Contract",CONTRACT_ADDR)
await console.log(contract.x(47));





}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});