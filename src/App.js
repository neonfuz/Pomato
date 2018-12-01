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
    <Timer interval={1000 * 60}>
      {([time, reset]) => {
         const minutes = time
         const remaining = Math.max(0, 25-minutes)
         return (
           <>
             <PomTimer time={remaining} />
             <Favicon
               number={remaining}
               color="white"
               bg="#6f2d2a"
               weight="bold"
               off1={4}
             />
             <button onClick={reset}>Reset</button>
           </>
         )
      }}
    </Timer>
  </div>
)

export default App
