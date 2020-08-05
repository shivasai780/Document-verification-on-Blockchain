"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _jsxFileName = "/home/shiva/Documents/react_revice/certificate_verify/pages/Org/Verify.js?entry";


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
        var org1, accounts, out, status;
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
                console.log(_this.state.ipfs_hash);
                _context4.next = 12;
                return org1.methods.verify(_this.state.ipfs_hash).send({ from: accounts[0], value: Number(_this.state.contributed) });

              case 12:
                out = _context4.sent;

                console.log(out);
                console.log((0, _typeof3.default)(_this.state.ipfs_hash));
                _context4.next = 17;
                return org1.methods.verify(_this.state.ipfs_hash).call({ from: accounts[0], value: Number(_this.state.contributed) });

              case 17:
                status = _context4.sent;

                console.log(status);
                if (status == true) {
                  _this.setState({ status: "User verified" });
                } else {
                  _this.setState({ status: "User not present" });
                }
                _context4.next = 25;
                break;

              case 22:
                _context4.prev = 22;
                _context4.t0 = _context4["catch"](7);

                _this.setState({ errorMessage: _context4.t0.message });

              case 25:
                _this.setState({ loading: false });

              case 26:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, _this2, [[7, 22]]);
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
      status: null,
      minimumvalue: null
    };

    _this.Capturefile = _this.Capturefile.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Adduser, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, "Name "), _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, this.state.ipfs_hash), _react2.default.createElement(_semanticUiReact.Input, {
        label: "document",
        type: "file",
        labelPosition: "right",
        onChange: this.Capturefile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }), _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, "value "), _react2.default.createElement(_semanticUiReact.Input, {
        label: this.state.minimumvalue,
        labelPosition: "right",
        onChange: function onChange(event) {
          return _this3.setState({ contributed: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { content: this.state.status, __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }), _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: "oops!",
        content: this.state.errorMessage,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, "Create")));
    }
  }]);

  return Adduser;
}(_react.Component);

exports.default = Adduser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL09yZy9WZXJpZnkuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJpcGZzIiwib3JnYW5pemF0aW9uIiwid2ViMyIsIkxheW91dCIsIkJ1dHRvbiIsIkZvcm0iLCJJbWFnZSIsIklucHV0IiwiTWVzc2FnZSIsIkxpbmsiLCJSb3V0ZXIiLCJBZGR1c2VyIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJhZGRyZXNzIiwiT3JnIiwiY29tcG9uZW50RGlkTW91bnQiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiT3JnMTEiLCJtZXRob2RzIiwibWluaW11bV9vcGVyIiwiY2FsbCIsInZhbHVlIiwic2V0U3RhdGUiLCJtaW5pbXVtdmFsdWUiLCJDYXB0dXJlZmlsZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJyZWFkZXIiLCJ3aW5kb3ciLCJGaWxlUmVhZGVyIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJidWZmZXIiLCJCdWZmZXIiLCJzdGF0ZSIsImFkZCIsImVycm9yIiwiaXBmc19oYXNoIiwiaGFzaCIsIm9uU3VibWl0Iiwib3JnMSIsImNvbnRyaWJ1dGVkIiwibG9hZGluZyIsImVycm9yTWVzc2FnZSIsInZlcmlmeSIsInNlbmQiLCJmcm9tIiwiTnVtYmVyIiwib3V0Iiwic3RhdHVzIiwibWVzc2FnZSIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWtCOzs7O0FBQ3pCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFRLEFBQU0sQUFBTyxBQUFPOztBQUNyQyxBQUFTLEFBQU0sQUFBYzs7Ozs7OztJQUN2QixBOzs7Ozs7MkdBQ3lCLEE7Ozs7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QUssWUFBTCxBQUFpQixLQUFwQyxBQUNBO1VBQUEsQUFBSyxXQUFXLE1BQUEsQUFBSyxTQUFMLEFBQWMsS0FiYixBQWFqQjtXQUNEOzs7Ozs2QkEyRFE7bUJBQ1A7OzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EO29CQUFuRDtzQkFBQSxBQUNFO0FBREY7eUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0EsMEJBQUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFBUTtBQUFSO0FBQUEsY0FBUSxBQUFLLE1BRmYsQUFFRSxBQUFtQixBQUNuQiw0QkFBQSxBQUFDO2VBQUQsQUFDUSxBQUNOO2NBRkYsQUFFTyxBQUNMO3VCQUhGLEFBR2dCLEFBQ2Q7a0JBQVUsS0FKWixBQUlpQjs7b0JBSmpCO3NCQUhGLEFBR0UsQUFNQTtBQU5BO0FBQ0UsMEJBS0YsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBVEYsQUFTRSxBQUNBLDJCQUFBLEFBQUM7ZUFDUSxLQUFBLEFBQUssTUFEZCxBQUNvQixBQUNsQjt1QkFGRixBQUVnQixBQUNkO2tCQUFVLGtCQUFBLEFBQUMsT0FBRDtpQkFDUixPQUFBLEFBQUssU0FBUyxFQUFFLGFBQWEsTUFBQSxBQUFNLE9BRDNCLEFBQ1IsQUFBYyxBQUE0QjtBQUo5Qzs7b0JBQUE7c0JBWEosQUFDRSxBQVVFLEFBUUY7QUFSRTtBQUNFLDJCQU9KLEFBQUMsMENBQVEsU0FBUyxLQUFBLEFBQUssTUFBdkIsQUFBNkI7b0JBQTdCO3NCQW5CRixBQW1CRSxBQUNBO0FBREE7MEJBQ0EsQUFBQztlQUFELEFBRUU7Z0JBRkYsQUFFUyxBQUNQO2lCQUFTLEtBQUEsQUFBSyxNQUhoQixBQUdzQjs7b0JBSHRCO3NCQXBCRixBQW9CRSxBQUtBO0FBTEE7QUFDRSwwQkFJRixBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFNBQVMsU0FBckM7b0JBQUE7c0JBQUE7QUFBQTtTQTNCTixBQUNFLEFBQ0UsQUF5QkUsQUFNUDs7Ozs7QUFsSG1CLEEsQUFvSHRCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlZlcmlmeS5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9zaGl2YS9Eb2N1bWVudHMvcmVhY3RfcmV2aWNlL2NlcnRpZmljYXRlX3ZlcmlmeSJ9