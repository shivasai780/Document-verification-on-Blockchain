import web3 from "./web3";
import organization from "./build/Organization.json";

export default (address) => {
  return new web3.eth.Contract(JSON.parse(organization.interface), address);
};
