"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Web3 = require("web3");
console.log(Web3);
var web3 = void 0;
if (typeof window !== "undefined" && window.web3 !== "undefined") {
  web3 = new Web3(window.ethereum);
  window.ethereum.enable();
} else {
  var provider = new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/51223dfaae564927b29e609d0705fa12");
  web3 = new Web3(provider);
}
exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsInJlcXVpcmUiLCJjb25zb2xlIiwibG9nIiwid2ViMyIsIndpbmRvdyIsImV0aGVyZXVtIiwiZW5hYmxlIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTSxPQUFPLEFBQVAsQUFBTjtBQUNBLFFBQVEsQUFBUixJQUFZLEFBQVo7QUFDQSxJQUFJLFlBQUo7QUFDQSxJQUFJLE9BQU8sQUFBUCxXQUFrQixBQUFsQixlQUFpQyxPQUFPLEFBQVAsU0FBZ0IsQUFBckQsYUFBa0UsQUFDaEU7U0FBTyxJQUFJLEFBQUosS0FBUyxPQUFPLEFBQWhCLEFBQVAsQUFDQTtTQUFPLEFBQVAsU0FBZ0IsQUFBaEIsQUFDRDtBQUhELE9BR08sQUFDTDtNQUFNLFdBQVcsSUFBSSxLQUFLLEFBQUwsVUFBZSxBQUFuQixhQUNmLEFBRGUsQUFBakIsQUFHQTtTQUFPLElBQUksQUFBSixLQUFTLEFBQVQsQUFBUCxBQUNEO0FBQ0Q7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3NoaXZhL0RvY3VtZW50cy9yZWFjdF9yZXZpY2UvY2VydGlmaWNhdGVfdmVyaWZ5In0=