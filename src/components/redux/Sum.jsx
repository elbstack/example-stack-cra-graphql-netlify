import React, { Component } from 'react';
import { connect } from 'react-redux';

class Sum extends Component {
  render() {
    return (
      <p className="text-2xl mb-2">Sum: {this.props.sum}</p>
    );
  }
}

export default connect(state => ({ sum: state.sum }))(Sum);