import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "https://bahnql.herokuapp.com/graphql"
});

class TrainViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryResult: {},
    }
  }

  componentWillMount = () => {
    client
      .query({
        query: gql`{
          routing(from: 8002549, to: 8000105) {
            parts {
              from {
                name
              }
              to {
                name
              }
              delay
              product {
                name
              }
              direction
              departingTrack {
                platform
                number
                length
                height
                name
              }
              arrivingTrack {
                platform
                number
                length
                height
                name
              }
            }
          }
        }`
      
      })
      .then(result => console.log(result));
  }

  render() {
    return (
      <div className="App">
      <h2>Hi</h2>
      </div>
    );
  }
}

export default TrainViewer;
