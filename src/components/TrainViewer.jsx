import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { FraToMun } from "../queries/FraToMun";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT
});

class TrainViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryResult: null
    };
  }

  componentWillMount = () => {
    client
      .query({
        query: FraToMun()
      })
      .then(result => result.data)
      .then(queryResult => this.setState({ ...this.state, queryResult }));
  };

  render() {
    return (
      <div className="mb-4 border-blue border-b-4">
        <div className="ml-4 pl-4 border-l-2 border-blue-light">
          <p className="text-2xl mb-2">Train Viewer</p>
          {this.state.queryResult &&
            this.state.queryResult.routing[0].parts.map(route => (
              <div
                className="mb-4"
                key={route.from.name + "to" + route.to.name}
              >
                <p>
                  {route.from.name} to {route.to.name}
                </p>
                <p>with {route.product.name} </p>
                <p>Departure: {route.departingTrack.name}</p>
                <p>Arrival: {route.arrivingTrack.name}</p>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default TrainViewer;
