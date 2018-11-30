import React, { Component } from 'react';
import './App.css';

import Timer from './timer'
import Favicon from './favicon.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timer>{([time, reset]) => (
          <div>
            {time}
            <Favicon number={0} />
            <button onClick={reset}>Reset</button>
          </div>
        )}</Timer>
      </div>
    );
  }
}

export default App
