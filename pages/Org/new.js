import React, { Component } from "react";
import certify from "../../ethereum/Create_Org.js";
import web3 from "../../ethereum/web3";
import Layout from "../../components/layout";
import { Button, Form, Input, Message } from "semantic-ui-react";
import { Link, Router } from "../../routes";

class Orgnew extends Component {
  state = {
    name: "",
    address: "",
    loading: false,
    error: "",
  };
  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true, errorMessage: "" });
    try {
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);
      await certify.methods
        .New_Organization(this.state.name, this.state.address)
        .send({
          from: accounts[0],
        });

      Router.pushRoute("/");
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };
  render() {
    return (
      <Layout>
        <h3>Create a Organization</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Name </label>
            <Input
              label="Bank name"
              labelPosition="right"
              value={this.state.name}
              onChange={(event) => this.setState({ name: event.target.value })}
            ></Input>
            <label>Address </label>
            <Input
              label="Bank address"
              labelPosition="right"
              value={this.state.ethaddress}
              onChange={(event) =>
                this.setState({ address: event.target.value })
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
export default Orgnew;
