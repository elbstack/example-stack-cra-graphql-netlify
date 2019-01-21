import React, { Component } from 'react';
import TrainViewer from './components/TrainViewer';
import LambdaCaller from './components/LambdaCaller';

class App extends Component {
  render() {
    return (
      <div className="w-screen h-screen bg-blue p-32 flex justify-center">
        <div className="w-128 bg-grey-lightest shadow flex flex-col">
          <h1 className="mb-4 p-4 border-b-4 border-blue">Demo App</h1>
          <TrainViewer/>
          <LambdaCaller/>
        </div>
      </div >
    );
  }
}

export default App;
