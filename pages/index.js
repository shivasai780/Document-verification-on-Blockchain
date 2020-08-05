import React, { Component } from "react";
import createorg from "../ethereum/Create_Org.js";
import { Card, Button } from "semantic-ui-react";
import Layout from "../components/layout";
import { Link } from "../routes";
class Createorg extends Component {
  //static is class function .function is asssigned to the calss itself not for the instance
  static async getInitialProps() {
    const orgs = await createorg.methods.getOrganization_address().call();
    console.log(orgs);
    return { orgs }; //return this object as props to Campaighnindex
  }

  /* async componentDidMount() {
      
    }*/
  renderOrgs() {
    const items = this.props.orgs.map((address) => {
      return {
        header: address,
        description: (
          <Link route={`/Org/${address}`}>
            <a>View Org</a>
          </Link>
        ),
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  }
  render() {
    return (
      <Layout>
        <div>
          <h3>Organizations</h3>
          <Link route="/Org/new">
            <a>
              <Button
                floated="right"
                content="Create Organization"
                icon="add circle"
                primary
              />
            </a>
          </Link>

          {this.renderOrgs()}
        </div>
      </Layout>
    );
  }
}
export default Createorg;
