"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ipfs = require("../../ethereum/ipfs.js");

var _ipfs2 = _interopRequireDefault(_ipfs);

var _Organization = require("../../ethereum/Organization");

var _Organization2 = _interopRequireDefault(_Organization);

var _web = require("../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _layout = require("../../components/layout");

var _layout2 = _interopRequireDefault(_layout);

var _semanticUiReact = require("semantic-ui-react");

var _routes = require("../../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/shiva/Documents/react_revice/certificate_verify/pages/Org/Add.js?entry";

//import { sha256 } from "js-sha256";

var Adduser = function (_Component) {
  (0, _inherits3.default)(Adduser, _Component);

  (0, _createClass3.default)(Adduser, null, [{
    key: "getInitialProps",
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var address, Org;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(props.query.address);
                address = props.query.address;
                Org = (0, _Organization2.default)(address);
                return _context.abrupt("return", { Org: Org, address: address });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function Adduser(props) {
    var _this2 = this;

    (0, _classCallCheck3.default)(this, Adduser);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Adduser.__proto__ || (0, _getPrototypeOf2.default)(Adduser)).call(this, props));

    _this.componentDidMount = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
      var accounts, Org11, value;
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _web2.default.eth.getAccounts();

            case 2:
              accounts = _context2.sent;
              Org11 = (0, _Organization2.default)(_this.props.address);
              _context2.next = 6;
              return Org11.methods.minimum_oper().call();

            case 6:
              value = _context2.sent;

              console.log(accounts, value);
              _this.setState({ minimumvalue: value });

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, _this2);
    }));

    _this.Capturefile = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(event) {
        var file, reader;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                event.preventDefault();
                console.log("hii", "hii", "hii", "hii");
                file = event.target.files[0];
                reader = new window.FileReader();

                reader.readAsArrayBuffer(file);
                reader.onloadend = function () {
                  console.log(reader.result);
                  _this.setState({ buffer: Buffer(reader.result) });
                  console.log("buffer", _this.state.buffer);
                };
                // console.log("This is hash" + sha256(this.state.buffer));
                _context3.next = 8;
                return _ipfs2.default.files.add(_this.state.buffer, function (error, result) {
                  console.log(result);
                  if (error) {
                    console.log(error);
                    return;
                  }
                  console.log("hii");
                  _this.setState({ ipfs_hash: result[0].hash });
                  console.log(_this.state.ipfs_hash);
                });

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, _this2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }();

    _this.onSubmit = function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(event) {
        var org1, accounts;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                event.preventDefault();
                org1 = (0, _Organization2.default)(_this.props.address);
                _context4.next = 4;
                return _web2.default.eth.getAccounts();

              case 4:
                accounts = _context4.sent;

                console.log(_this.state.ipfs_hash, _this.state.contributed);
                _this.setState({ loading: true, errorMessage: "" });
                _context4.prev = 7;

                console.log(org1);
                _context4.next = 11;
                return org1.methods.add(_this.state.ipfs_hash).send({ from: accounts[0], value: Number(_this.state.contributed) });

              case 11:
                _routes.Router.pushRoute("/");
                _context4.next = 17;
                break;

              case 14:
                _context4.prev = 14;
                _context4.t0 = _context4["catch"](7);

                _this.setState({ errorMessage: _context4.t0.message });

              case 17:
                _this.setState({ loading: false });

              case 18:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, _this2, [[7, 14]]);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }();

    _this.state = {
      ipfs_hash: "",
      contributed: null,
      buffer: "",
      loading: false,
      errorMessage: "",

      minimumvalue: null
      //inputvalue:""
    };

    _this.Capturefile = _this.Capturefile.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }
  /* onSubmittext=async(event)=>{
    event.preventDefault();
    const org1 = organization(this.props.address);
    const accounts = await web3.eth.getAccounts();
    console.log(this.inputvalue, this.state.contributed);
    this.setState({ loading: true, errorMessage: "" });
    try {
      console.log(org1);
      await org1.methods
        .add(this.state.inputvalue)
        .send({ from: accounts[0], value: Number(this.state.contributed) });
      Router.pushRoute(`/`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
   }*/

  (0, _createClass3.default)(Adduser, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, "Name "), _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, this.state.ipfs_hash), _react2.default.createElement(_semanticUiReact.Input, {
        label: "document",
        type: "file",
        labelPosition: "right",
        onChange: this.Capturefile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }), _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, "value "), _react2.default.createElement(_semanticUiReact.Input, {
        label: this.state.minimumvalue,
        labelPosition: "right",
        onChange: function onChange(event) {
          return _this3.setState({ contributed: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      })), _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: "oops!",
        content: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, "Create")));
    }
  }]);

  return Adduser;
}(_react.Component);

exports.default = Adduser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL09yZy9BZGQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJpcGZzIiwib3JnYW5pemF0aW9uIiwid2ViMyIsIkxheW91dCIsIkJ1dHRvbiIsIkZvcm0iLCJJbWFnZSIsIklucHV0IiwiTWVzc2FnZSIsIkxpbmsiLCJSb3V0ZXIiLCJBZGR1c2VyIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJhZGRyZXNzIiwiT3JnIiwiY29tcG9uZW50RGlkTW91bnQiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiT3JnMTEiLCJtZXRob2RzIiwibWluaW11bV9vcGVyIiwiY2FsbCIsInZhbHVlIiwic2V0U3RhdGUiLCJtaW5pbXVtdmFsdWUiLCJDYXB0dXJlZmlsZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJyZWFkZXIiLCJ3aW5kb3ciLCJGaWxlUmVhZGVyIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJidWZmZXIiLCJCdWZmZXIiLCJzdGF0ZSIsImFkZCIsImVycm9yIiwiaXBmc19oYXNoIiwiaGFzaCIsIm9uU3VibWl0Iiwib3JnMSIsImNvbnRyaWJ1dGVkIiwibG9hZGluZyIsImVycm9yTWVzc2FnZSIsInNlbmQiLCJmcm9tIiwiTnVtYmVyIiwicHVzaFJvdXRlIiwibWVzc2FnZSIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVEsQUFBTSxBQUFPLEFBQU87O0FBQ3JDLEFBQVMsQUFBTSxBQUFjOzs7Ozs7QUFDN0I7O0ksQUFDTTs7Ozs7OzJHLEFBQ3lCOzs7OzttQkFDM0I7d0JBQUEs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TDt1QkFIRixBQUdnQixBQUNkO2tCQUFVLEtBSlosQUFJaUI7O29CQUpqQjtzQkFIRixBQUdFLEFBTUE7QUFOQTtBQUNFLDBCQUtGLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQVRGLEFBU0UsQUFDQSwyQkFBQSxBQUFDO2VBQ1EsS0FBQSxBQUFLLE1BRGQsQUFDb0IsQUFDbEI7dUJBRkYsQUFFZ0IsQUFDZDtrQkFBVSxrQkFBQSxBQUFDLE9BQUQ7aUJBQ1IsT0FBQSxBQUFLLFNBQVMsRUFBRSxhQUFhLE1BQUEsQUFBTSxPQUQzQixBQUNSLEFBQWMsQUFBNEI7QUFKOUM7O29CQUFBO3NCQVhKLEFBQ0UsQUFVRSxBQVNGO0FBVEU7QUFDRSwyQkFRSixBQUFDO2VBQUQsQUFFRTtnQkFGRixBQUVTLEFBQ1A7aUJBQVMsS0FBQSxBQUFLLE1BSGhCLEFBR3NCOztvQkFIdEI7c0JBcEJGLEFBb0JFLEFBS0E7QUFMQTtBQUNFLDBCQUlGLEFBQUMseUNBQU8sU0FBUyxLQUFBLEFBQUssTUFBdEIsQUFBNEIsU0FBUyxTQUFyQztvQkFBQTtzQkFBQTtBQUFBO1NBM0JOLEFBQ0UsQUFDRSxBQXlCRSxBQU1QOzs7OztBQTVIbUIsQSxBQThIdEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQWRkLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL3NoaXZhL0RvY3VtZW50cy9yZWFjdF9yZXZpY2UvY2VydGlmaWNhdGVfdmVyaWZ5In0=