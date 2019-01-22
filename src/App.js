import React, { Component } from 'react';
import TrainViewer from './components/TrainViewer';
import LambdaCaller from './components/LambdaCaller';
import ReduxCounter from './components/ReduxCounter';

class App extends Component {
  render() {
    return (
      <div className="w-screen h-screen bg-blue p-32 flex justify-center">
        <div className="w-128 bg-grey-lightest shadow flex flex-col">
          <h1 className="mb-4 p-4 border-b-4 border-blue">Demo App</h1>
          <TrainViewer/>
          <LambdaCaller/>
          <ReduxCounter/>
        </div>
      </div >
    );
  }
}

export default App;
