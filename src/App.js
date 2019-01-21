import React, { Component } from 'react';
import TrainViewer from './components/TrainViewer';

class App extends Component {
  render() {
    return (
      <div className="w-screen h-screen bg-blue p-32 flex justify-center">
        <div className="w-128 bg-grey-lightest p-8 shadow">
          <h1>Example App</h1>
          <TrainViewer/>
        </div>
      </div >
    );
  }
}

export default App;
