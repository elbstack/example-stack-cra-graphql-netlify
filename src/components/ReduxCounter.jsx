import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStore from './redux/createStore';
import Counter from './redux/Counter';
import Sum from './redux/Sum';

const store = createStore();

export default class ReduxCounter extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="mb-4 border-blue border-b-4">
          <div className="ml-4 pl-4 border-l-2 border-blue-light">
            <p className="text-2xl mb-2">Counter</p>
            <Counter id='a' />
            <Counter id='b' />
            <Counter id='c' />
            <Sum />
          </div>
        </div>
      </Provider>
    );
  }
}