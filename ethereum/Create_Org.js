import web3 from "./web3";
import createorg from "./build/Create_Org.json";

const instance = new web3.eth.Contract(
  JSON.parse(createorg.interface),
  "0x5a9D18394D08F733AbcdF47bCbE245d3C61F560b"
);
export default instance;
