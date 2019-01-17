import React, { Component } from 'react';
import TrainViewer from './components/TrainViewer';

class App extends Component {
  render() {
    return (
      <div className="w-screen h-screen bg-blue-lightest p-8 flex justify-center">
        <div className="container bg-grey-lightest p-8">
          <h1>Example App</h1>
          <TrainViewer/>
        </div>
      </div >
    );
  }
}

export default App;
