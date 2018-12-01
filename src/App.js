import React from 'react'
import './App.css'

import Timer from './timer'
import Favicon from './favicon.js'
import PomTimer from './pomtimer'

const App = () => (
  <div className="App">
    <h1>Pomato!</h1>
    <i>
      A simple productivity timer based on the{' '}
      <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">
        Pomodoro Technique
      </a>
    </i>
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
