import React from 'react'
import './App.css'

import Timer from './timer'
import Favicon from './favicon.js'
import { ReactComponent as Pomato } from './pomato.svg'

const App = () => (
  <div className="App">
    <Pomato />
    <Timer interval={1000 * 60}>{([time, reset]) => (
      <>
        <Favicon number={Math.max(0, 25-time)} />
        <button onClick={reset}>Reset</button>
      </>
    )}</Timer>
  </div>
)

export default App
