import React from 'react'
import './App.css'

import Timer from './timer'
import Favicon from './favicon.js'

const App = () => (
  <div className="App">
    <h1> Favicon Timer! </h1>
    <Timer interval={1000 * 60}>{([time, reset]) => (
      <>
        <Favicon number={time} />
        <button onClick={reset}>Reset</button>
      </>
    )}</Timer>
  </div>
)

export default App
