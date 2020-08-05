"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require("./web3");

var _web2 = _interopRequireDefault(_web);

var _Create_Org = require("./build/Create_Org.json");

var _Create_Org2 = _interopRequireDefault(_Create_Org);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_Create_Org2.default.interface), "0x5a9D18394D08F733AbcdF47bCbE245d3C61F560b");
exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL0NyZWF0ZV9PcmcuanMiXSwibmFtZXMiOlsid2ViMyIsImNyZWF0ZW9yZyIsImluc3RhbmNlIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUFzQixBQUF0Qjs7Ozs7O0FBRUEsSUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLElBQVMsQUFBYixTQUNmLEtBQUssQUFBTCxNQUFXLHFCQUFVLEFBQXJCLEFBRGUsWUFFZixBQUZlLEFBQWpCLEFBSUE7a0JBQWUsQUFBZiIsImZpbGUiOiJDcmVhdGVfT3JnLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL3NoaXZhL0RvY3VtZW50cy9yZWFjdF9yZXZpY2UvY2VydGlmaWNhdGVfdmVyaWZ5In0=