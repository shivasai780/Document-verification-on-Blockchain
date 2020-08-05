const Web3 = require("web3");
console.log(Web3);
let web3;
if (typeof window !== "undefined" && window.web3 !== "undefined") {
  web3 = new Web3(window.ethereum);
  window.ethereum.enable();
} else {
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/51223dfaae564927b29e609d0705fa12"
  );
  web3 = new Web3(provider);
}
export default web3;
