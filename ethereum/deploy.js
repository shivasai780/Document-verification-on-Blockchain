const HDwalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { bytecode, interface } = require("./build/Create_Org.json");
const provider = new HDwalletProvider(
  "Keep your Phasphrase",
  " https://rinkeby.infura.io/v3/51223dfaae564927b29e609d0705fa12"
);
const web3 = new Web3(provider);
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log(accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: "0x" + bytecode })
    .send({ from: accounts[0] });
  console.log("compiled at" + result.options.address);
};
deploy();
//0x5a9D18394D08F733AbcdF47bCbE245d3C61F560b
