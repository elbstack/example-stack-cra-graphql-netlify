import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <p className="text-2xl mb-2">
        <span
          className="m-4 p-1 bg-blue select-none"
          onClick={this.props.increment}
        >
          +
        </span>
        <span
          className="m-4 p-1 bg-blue select-none"
          onClick={this.props.decrement}
        >
          -
        </span>
        {this.props.id}: {this.props.count}
      </p>
    );
  }
}

export default connect(
  (state, ownProps) => ({ count: state.counts[ownProps.id] }),
  (dispatch, ownProps) => ({
    increment: () => dispatch({ type: "INCREMENT", id: ownProps.id }),
    decrement: () => dispatch({ type: "DECREMENT", id: ownProps.id })
  })
)(Counter);
