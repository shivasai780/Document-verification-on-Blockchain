"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _Organization = require("./build/Organization.json");

var _Organization2 = _interopRequireDefault(_Organization);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  return new _web2.default.eth.Contract(JSON.parse(_Organization2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL09yZ2FuaXphdGlvbi5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwib3JnYW5pemF0aW9uIiwiYWRkcmVzcyIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBeUIsQUFBekIsQUFFQTs7Ozs7O2tCQUFlLFVBQUMsQUFBRCxTQUFhLEFBQzFCO1NBQU8sSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQXNCLEtBQUssQUFBTCxNQUFXLHVCQUFhLEFBQXhCLEFBQXRCLFlBQTBELEFBQTFELEFBQVAsQUFDRDtBQUZEIiwiZmlsZSI6Ik9yZ2FuaXphdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9zaGl2YS9Eb2N1bWVudHMvcmVhY3RfcmV2aWNlL2NlcnRpZmljYXRlX3ZlcmlmeSJ9