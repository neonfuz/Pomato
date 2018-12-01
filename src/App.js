import React from 'react'
import './App.css'

import Timer from './timer'
import Favicon from './favicon.js'
import PomTimer from './pomtimer'

const App = () => (
  <div className="App">
    <Timer interval={1000 * 60}>{([time, reset]) => (
      <>
        <PomTimer time={Math.max(0, 25-time)} />
        <Favicon number={Math.max(0, 25-time)} />
        <button onClick={reset}>Reset</button>
      </>
    )}</Timer>
  </div>
)

export default App
