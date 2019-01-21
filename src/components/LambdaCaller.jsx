import React, { Component, createRef } from 'react';
import * as cn from 'classnames';

class LambdaCaller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
    }
  }

  inputRef = createRef();

  handleClick = () => {
    fetch(`.netlify/functions/example?msg=${this.inputRef.current.value}`).then(() => this.setState({ ...this.state, submitted: true }));
  };

  render() {
    return (
      <div className="mb-4 border-blue border-b-4">
        <div className="ml-4 pl-4 border-l-2 border-blue-light mb-4">
          <p className="text-2xl mb-2">Bernd Buzzer</p>
          <div className="flex items-center">
            <input ref={this.inputRef} type="text" className={cn('w-64 h-8 text-xl bg-white border mr-4', this.state.submitted ? 'border-green' : 'border-blue-lighter ')} />
            <p className="bg-blue text-white px-4 py-2 rounded-lg cursor-pointer" onClick={this.handleClick}>Buzz</p>
          </div>

        </div>
      </div>
    );
  }
}

export default LambdaCaller;
