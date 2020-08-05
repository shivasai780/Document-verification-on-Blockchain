const path = require("path");
const fs = require("fs-extra");
const solc = require("solc");
const buildpath = path.resolve(__dirname, "build");
console.log(__dirname);
fs.removeSync(buildpath);
const contractpath = path.resolve(__dirname, "certify.sol");
const source = fs.readFileSync(contractpath, "utf8");
const output = solc.compile(source, 1).contracts;
fs.ensureDirSync(buildpath);
for (let contract in output) {
  fs.outputJSONSync(
    path.resolve(buildpath, contract.replace(":", "") + ".json"),
    output[contract]
  );
  console.log(contract);
}
