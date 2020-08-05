"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

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

var _semanticUiReact = require("semantic-ui-react");

var _layout = require("../../components/layout");

var _layout2 = _interopRequireDefault(_layout);

var _routes = require("../../routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/shiva/Documents/react_revice/certificate_verify/pages/Org/show.js?entry";


var Orgshow = function (_Component) {
  (0, _inherits3.default)(Orgshow, _Component);

  function Orgshow() {
    (0, _classCallCheck3.default)(this, Orgshow);

    return (0, _possibleConstructorReturn3.default)(this, (Orgshow.__proto__ || (0, _getPrototypeOf2.default)(Orgshow)).apply(this, arguments));
  }

  (0, _createClass3.default)(Orgshow, [{
    key: "render",

    /*
      componentDidMount = async () => {
          try {
            const accounts = await web3.eth.getAccounts();
            console.log(accounts);
            console.log(this.props.Bank.methods);
           // const Bank1 = bank(this.props.address);
           const Org=this.props.org;
           // console.log(Bank1);
            const minimum = await Org.methods.minimum_oper().call();
            console.log(minimum);
            this.setState({ minimumvalue: minimum });
          } catch (err) {
            console.log(err.message);
          }
        };
    
     captureFile = async (event) => {
          event.preventDefault();
          console.log(this.state.name);
          const file = event.target.files[0];
          const reader = new window.FileReader();
          console.log(this);
          reader.readAsArrayBuffer(file);
          reader.onloadend = () => {
            console.log(reader.result);
            this.setState({ buffer: Buffer(reader.result) });
            console.log("buffer", this.state.buffer);
          };
          await ipfs.files.add(this.state.buffer, (error, result) => {
            console.log(result);
            if (error) {
              console.log(error);
              return;
            }
            console.log("hii");
            this.setState({ ipfs_hash: result[0].hash });
            console.log(this.state.ipfs_hash);
          });
        };
      Addfile=async(event)=>{
          event.preventDefault();
          this.setState({loading:true,error:""})
         try{
              await org.methods.add(this.state.ipfs_hash).send({from:accounts[0],value:this.state.value});
         }catch (err) {
             this.setState({error:err.Message});
         }
         this.setState({loading:false})
       }*/
    value: function render() {
      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, { columns: 2, relaxed: "very", stackable: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement(_routes.Link, { route: "/Org/" + this.props.address + "/Add", __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, "Add")), _react2.default.createElement(_semanticUiReact.Divider, { horizontal: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, " OR"), _react2.default.createElement(_routes.Link, { route: "/Org/" + this.props.address + "/Delete", __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, "Delete user"))), _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement(_routes.Link, { route: "/Org/" + this.props.address + "/Verify", __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, "Verify user")))), _react2.default.createElement(_semanticUiReact.Divider, { vertical: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, "OR"))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(props) {
      console.log(props);
      console.log(props.query.address);
      var address = props.query.address;
      var org = (0, _Organization2.default)(address);
      return { org: org, address: address };
    }
  }]);

  return Orgshow;
}(_react.Component);

exports.default = Orgshow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL09yZy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiaXBmcyIsIm9yZ2FuaXphdGlvbiIsIndlYjMiLCJMYWJlbCIsIkNhcmQiLCJCdXR0b24iLCJJbnB1dCIsIlNlZ21lbnQiLCJHcmlkIiwiRGl2aWRlciIsIkxheW91dCIsIkxpbmsiLCJPcmdzaG93IiwicHJvcHMiLCJhZGRyZXNzIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5Iiwib3JnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPLEFBQVU7Ozs7QUFDakIsQUFDRSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQTs7QUFFRixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOzs7Ozs7O0lBQ2YsQTs7Ozs7Ozs7OztTQVNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQW9EUyxBQUNQOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx1Q0FBSyxTQUFOLEFBQWUsR0FBRyxTQUFsQixBQUEwQixRQUFPLFdBQWpDO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsOEJBQUssaUJBQWUsS0FBQSxBQUFLLE1BQXBCLEFBQTBCLFVBQWhDO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDOztvQkFBRDtzQkFBQTtBQUFBO0FBQUEsU0FGSixBQUNFLEFBQ0UsQUFFRix5QkFBQSxBQUFDLDBDQUFRLFlBQVQ7b0JBQUE7c0JBQUE7QUFBQTtTQUpGLEFBSUUsQUFDQSx3QkFBQSxBQUFDLDhCQUFLLGlCQUFlLEtBQUEsQUFBSyxNQUFwQixBQUEwQixVQUFoQztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUE7QUFBQTtBQUFBLFNBUE4sQUFDRSxBQUtFLEFBQ0UsQUFHSixrQ0FBQyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsOEJBQUssaUJBQWUsS0FBQSxBQUFLLE1BQXBCLEFBQTBCLFVBQWhDO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDOztvQkFBRDtzQkFBQTtBQUFBO0FBQUEsU0FiUixBQUNFLEFBVUUsQUFDRSxBQUNFLEFBSU4sbUNBQUEsQUFBQywwQ0FBUSxVQUFUO29CQUFBO3NCQUFBO0FBQUE7U0FwQlIsQUFDRSxBQUNFLEFBQ0UsQUFpQkUsQUFLVDs7OztvQyxBQXRGc0IsT0FBTyxBQUM1QjtjQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7Y0FBQSxBQUFRLElBQUksTUFBQSxBQUFNLE1BQWxCLEFBQXdCLEFBQ3hCO1VBQU0sVUFBVSxNQUFBLEFBQU0sTUFBdEIsQUFBNEIsQUFDNUI7VUFBTSxNQUFNLDRCQUFaLEFBQVksQUFBYSxBQUN6QjthQUFPLEVBQUUsS0FBRixLQUFPLFNBQWQsQUFBTyxBQUNSOzs7OztBQVBtQixBLEFBMEZ0Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL3NoaXZhL0RvY3VtZW50cy9yZWFjdF9yZXZpY2UvY2VydGlmaWNhdGVfdmVyaWZ5In0=