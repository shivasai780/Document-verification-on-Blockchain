import React, { Component } from "react";
import ipfs from "../../ethereum/ipfs.js";
import organization from "../../ethereum/Organization";
import web3 from "../../ethereum/web3";
import {
  Label,
  Card,
  Button,
  Input,
  Segment,
  Grid,
  Divider,
} from "semantic-ui-react";
import Layout from "../../components/layout";
import { Link } from "../../routes";
class Orgshow extends Component {
  static getInitialProps(props) {
    console.log(props);
    console.log(props.query.address);
    const address = props.query.address;
    const org = organization(address);
    return { org, address };
  }

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
  render() {
    return (
      <Layout>
        <div>
          <Segment>
            <Grid columns={2} relaxed="very" stackable>
              <Grid.Column>
                <Link route={`/Org/${this.props.address}/Add`}>
                  <Button>Add</Button>
                </Link>
                <Divider horizontal> OR</Divider>
                <Link route={`/Org/${this.props.address}/Delete`}>
                  <Button>Delete user</Button>
                </Link>
              </Grid.Column>
              <Grid.Column>
                <Link route={`/Org/${this.props.address}/Verify`}>
                  <Button>Verify user</Button>
                </Link>
              </Grid.Column>
            </Grid>
            <Divider vertical>OR</Divider>
          </Segment>
        </div>
      </Layout>
    );
  }
}

export default Orgshow;
