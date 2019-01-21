import React, { Component } from 'react';

class LambdaCaller extends Component {
  render() {
    return (
      <div className="mb-4 border-blue border-b-4">
      <div className="ml-4 pl-4 border-l-2 border-blue-light mb-4">
        <p className="text-2xl mb-2">Bernd Buzzer</p>
        <div className="flex items-center">
        <input type="text" className="w-64 h-8 text-xl bg-white border border-blue-lighter mr-4"/>
        <p className="bg-blue text-white px-4 py-2 rounded-lg cursor-pointer" onClick={() => {
          window.fetch('.netlify/functions/example').then(console.log);
        }}>Buzz</p>
        </div>

      </div>
      </div>
    );
  }
}

export default LambdaCaller;
