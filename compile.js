const path = require("path");
const fs = require("fs");
const solc = require("solc");

const lotteryPath = path.resolve(__dirname, "contracts", "Lottery.sol");
const source = fs.readFileSync(lotteryPath, "utf8");

const lottery = {
    language: 'Solidity',
    sources: {
      'Lottery.sol': {
        content: source,
      },
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*'],
        },
      },
    },
};

 
console.log(lottery.abi);
module.exports = JSON.parse(solc.compile(JSON.stringify(lottery))).contracts[
    'Lottery.sol'
  ].Lottery;

// module.exports = solc.compile(source, 1).contracts[":Lottery"];
