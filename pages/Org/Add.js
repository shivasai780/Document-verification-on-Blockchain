import React, { Component } from "react";
import ipfs from "../../ethereum/ipfs.js";
import organization from "../../ethereum/Organization";
import web3 from "../../ethereum/web3";
import Layout from "../../components/layout";
import { Button, Form, Image, Input, Message } from "semantic-ui-react";
import { Link, Router } from "../../routes";
//import { sha256 } from "js-sha256";
class Adduser extends Component {
  static async getInitialProps(props) {
    console.log(props.query.address);
    const address = props.query.address;
    const Org = organization(address);
    return { Org, address };
  }
  constructor(props) {
    super(props);
    this.state = {
      ipfs_hash: "",
      contributed: null,
      buffer: "",
      loading: false,
      errorMessage: "",

      minimumvalue: null,
      //inputvalue:""
    };

    this.Capturefile = this.Capturefile.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount = async () => {
    const accounts = await web3.eth.getAccounts();
    const Org11 = organization(this.props.address);
    const value = await Org11.methods.minimum_oper().call();
    console.log(accounts, value);
    this.setState({ minimumvalue: value });
  };
  Capturefile = async (event) => {
    event.preventDefault();
    console.log("hii", "hii", "hii", "hii");
    const file = event.target.files[0];

    const reader = new window.FileReader();

    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      console.log(reader.result);
      this.setState({ buffer: Buffer(reader.result) });
      console.log("buffer", this.state.buffer);
    };
    // console.log("This is hash" + sha256(this.state.buffer));
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
  onSubmit = async (event) => {
    event.preventDefault();
    const org1 = organization(this.props.address);
    const accounts = await web3.eth.getAccounts();
    console.log(this.state.ipfs_hash, this.state.contributed);
    this.setState({ loading: true, errorMessage: "" });
    try {
      console.log(org1);
      await org1.methods
        .add(this.state.ipfs_hash)
        .send({ from: accounts[0], value: Number(this.state.contributed) });
      Router.pushRoute(`/`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };
  render() {
    return (
      <Layout>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Name </label>
            <label>{this.state.ipfs_hash}</label>
            <Input
              label="document"
              type="file"
              labelPosition="right"
              onChange={this.Capturefile}
            ></Input>
            <label>value </label>
            <Input
              label={this.state.minimumvalue}
              labelPosition="right"
              onChange={(event) =>
                this.setState({ contributed: event.target.value })
              }
            ></Input>
          </Form.Field>

          <Message
            error
            header="oops!"
            content={this.state.errorMessage}
          ></Message>
          <Button loading={this.state.loading} primary>
            Create
          </Button>
        </Form>
      </Layout>
    );
  }
}
export default Adduser;
