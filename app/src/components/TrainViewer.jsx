import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { FraToMun } from '../queries/FraToMun';

const client = new ApolloClient({
  uri: "/graphql"
});

class TrainViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryResult: null,
    }
  }

  componentWillMount = () => {
    client
      .query({
        query: FraToMun()
      })
      .then(result => result.data).then(queryResult => this.setState({ ...this.state, queryResult }));
  }

  render() {
    return (
      <div className="App">
        <h2>Hi</h2>
        {this.state.queryResult && this.state.queryResult.routing[0].parts.map(route => <div className="mb-4" key={route.from.name + 'to' + route.to.name}>
          <p>{route.from.name} to {route.to.name}</p>
          <p>with {route.product.name} </p>
          <p>Departure: {route.departingTrack.name}</p>
          <p>Arrival: {route.arrivingTrack.name}</p>
        </div>)}
      </div>
    );
  }
}

export default TrainViewer;
