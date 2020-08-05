webpackHotUpdate(7,{

/***/ 2381:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer, __resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _ipfs = __webpack_require__(1815);

var _ipfs2 = _interopRequireDefault(_ipfs);

var _Organization = __webpack_require__(2378);

var _Organization2 = _interopRequireDefault(_Organization);

var _web = __webpack_require__(848);

var _web2 = _interopRequireDefault(_web);

var _layout = __webpack_require__(1427);

var _layout2 = _interopRequireDefault(_layout);

var _semanticUiReact = __webpack_require__(538);

var _routes = __webpack_require__(842);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/shiva/Documents/react_revice/certificate_verify/pages/Org/Add.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/shiva/Documents/react_revice/certificate_verify/pages/Org/Add.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/Org/Add")
  
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(391).Buffer, "?entry"))

/***/ }),

/***/ 2382:
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy44NmRiZDM4ODczNDE5ZWFiMWI3Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvT3JnL0FkZC5qcz9mNmVlZTE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBpcGZzIGZyb20gXCIuLi8uLi9ldGhlcmV1bS9pcGZzLmpzXCI7XG5pbXBvcnQgb3JnYW5pemF0aW9uIGZyb20gXCIuLi8uLi9ldGhlcmV1bS9Pcmdhbml6YXRpb25cIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi9ldGhlcmV1bS93ZWIzXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBGb3JtLCBJbWFnZSwgSW5wdXQsIE1lc3NhZ2UgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCB7IExpbmssIFJvdXRlciB9IGZyb20gXCIuLi8uLi9yb3V0ZXNcIjtcbi8vaW1wb3J0IHsgc2hhMjU2IH0gZnJvbSBcImpzLXNoYTI1NlwiO1xuY2xhc3MgQWRkdXNlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcbiAgICBjb25zb2xlLmxvZyhwcm9wcy5xdWVyeS5hZGRyZXNzKTtcbiAgICBjb25zdCBhZGRyZXNzID0gcHJvcHMucXVlcnkuYWRkcmVzcztcbiAgICBjb25zdCBPcmcgPSBvcmdhbml6YXRpb24oYWRkcmVzcyk7XG4gICAgcmV0dXJuIHsgT3JnLCBhZGRyZXNzIH07XG4gIH1cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlwZnNfaGFzaDogXCJcIixcbiAgICAgIGNvbnRyaWJ1dGVkOiBudWxsLFxuICAgICAgYnVmZmVyOiBcIlwiLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBlcnJvck1lc3NhZ2U6IFwiXCIsXG5cbiAgICAgIG1pbmltdW12YWx1ZTogbnVsbCxcbiAgICAgIC8vaW5wdXR2YWx1ZTpcIlwiXG4gICAgfTtcblxuICAgIHRoaXMuQ2FwdHVyZWZpbGUgPSB0aGlzLkNhcHR1cmVmaWxlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblN1Ym1pdCA9IHRoaXMub25TdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgY29uc3QgT3JnMTEgPSBvcmdhbml6YXRpb24odGhpcy5wcm9wcy5hZGRyZXNzKTtcbiAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IE9yZzExLm1ldGhvZHMubWluaW11bV9vcGVyKCkuY2FsbCgpO1xuICAgIGNvbnNvbGUubG9nKGFjY291bnRzLCB2YWx1ZSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1pbmltdW12YWx1ZTogdmFsdWUgfSk7XG4gIH07XG4gIENhcHR1cmVmaWxlID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhcImhpaVwiLCBcImhpaVwiLCBcImhpaVwiLCBcImhpaVwiKTtcbiAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IHdpbmRvdy5GaWxlUmVhZGVyKCk7XG5cbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlYWRlci5yZXN1bHQpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJ1ZmZlcjogQnVmZmVyKHJlYWRlci5yZXN1bHQpIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJidWZmZXJcIiwgdGhpcy5zdGF0ZS5idWZmZXIpO1xuICAgIH07XG4gICAgLy8gY29uc29sZS5sb2coXCJUaGlzIGlzIGhhc2hcIiArIHNoYTI1Nih0aGlzLnN0YXRlLmJ1ZmZlcikpO1xuICAgIGF3YWl0IGlwZnMuZmlsZXMuYWRkKHRoaXMuc3RhdGUuYnVmZmVyLCAoZXJyb3IsIHJlc3VsdCkgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKFwiaGlpXCIpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlwZnNfaGFzaDogcmVzdWx0WzBdLmhhc2ggfSk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmlwZnNfaGFzaCk7XG4gICAgfSk7XG4gIH07XG4gIC8qIG9uU3VibWl0dGV4dD1hc3luYyhldmVudCk9PntcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IG9yZzEgPSBvcmdhbml6YXRpb24odGhpcy5wcm9wcy5hZGRyZXNzKTtcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgY29uc29sZS5sb2codGhpcy5pbnB1dHZhbHVlLCB0aGlzLnN0YXRlLmNvbnRyaWJ1dGVkKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOiBcIlwiIH0pO1xuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZyhvcmcxKTtcbiAgICAgIGF3YWl0IG9yZzEubWV0aG9kc1xuICAgICAgICAuYWRkKHRoaXMuc3RhdGUuaW5wdXR2YWx1ZSlcbiAgICAgICAgLnNlbmQoeyBmcm9tOiBhY2NvdW50c1swXSwgdmFsdWU6IE51bWJlcih0aGlzLnN0YXRlLmNvbnRyaWJ1dGVkKSB9KTtcbiAgICAgIFJvdXRlci5wdXNoUm91dGUoYC9gKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XG5cbiAgfSovXG4gIG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBvcmcxID0gb3JnYW5pemF0aW9uKHRoaXMucHJvcHMuYWRkcmVzcyk7XG4gICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuaXBmc19oYXNoLCB0aGlzLnN0YXRlLmNvbnRyaWJ1dGVkKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgZXJyb3JNZXNzYWdlOiBcIlwiIH0pO1xuICAgIHRyeSB7XG4gICAgICBjb25zb2xlLmxvZyhvcmcxKTtcbiAgICAgIGF3YWl0IG9yZzEubWV0aG9kc1xuICAgICAgICAuYWRkKHRoaXMuc3RhdGUuaXBmc19oYXNoKVxuICAgICAgICAuc2VuZCh7IGZyb206IGFjY291bnRzWzBdLCB2YWx1ZTogTnVtYmVyKHRoaXMuc3RhdGUuY29udHJpYnV0ZWQpIH0pO1xuICAgICAgUm91dGVyLnB1c2hSb3V0ZShgL2ApO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KTtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0gZXJyb3I9eyEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9PlxuICAgICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgPGxhYmVsPk5hbWUgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD57dGhpcy5zdGF0ZS5pcGZzX2hhc2h9PC9sYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBsYWJlbD1cImRvY3VtZW50XCJcbiAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5DYXB0dXJlZmlsZX1cbiAgICAgICAgICAgID48L0lucHV0PlxuICAgICAgICAgICAgPGxhYmVsPnZhbHVlIDwvbGFiZWw+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgbGFiZWw9e3RoaXMuc3RhdGUubWluaW11bXZhbHVlfVxuICAgICAgICAgICAgICBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjb250cmlidXRlZDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID48L0lucHV0PlxuICAgICAgICAgIDwvRm9ybS5GaWVsZD5cblxuICAgICAgICAgIDxNZXNzYWdlXG4gICAgICAgICAgICBlcnJvclxuICAgICAgICAgICAgaGVhZGVyPVwib29wcyFcIlxuICAgICAgICAgICAgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9XG4gICAgICAgICAgPjwvTWVzc2FnZT5cbiAgICAgICAgICA8QnV0dG9uIGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30gcHJpbWFyeT5cbiAgICAgICAgICAgIENyZWF0ZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBBZGR1c2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvT3JnL0FkZC5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFjQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFEQTtBQUhBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQWhCQTtBQUNBO0FBc0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUZBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQWJBO0FBQUE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFSQTtBQUNBO0FBZkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUF2QkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFpRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFIQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQVBBO0FBUUE7QUFDQTtBQUVBO0FBQUE7QUFYQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBYUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFoQkE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFsRUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBR0E7QUFWQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBaUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQ0E7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBOztBQUpBO0FBTUE7QUFOQTtBQUNBOztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFKQTs7QUFBQTtBQVNBO0FBVEE7QUFDQTtBQVVBO0FBQ0E7QUFBQTs7QUFIQTtBQUtBO0FBTEE7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQU1BOzs7Ozs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==