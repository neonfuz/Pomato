import React, { useState, useEffect } from 'react'
import './App.css'

import Timer from './timer'
import Favicon from './favicon.js'
import PomTimer from './pomtimer'

const Title = ({title}) => {
  useEffect(() => {
    document.title = title
  })
  return null
}

const Blah = () => {
  const [sprintTime, setSprintTime] = useState(25)
  return (
    <Timer interval={1000 * 60}>
      {([time, reset]) => {
         const minutes = time
         const remaining = Math.max(0, sprintTime-minutes)
         return (
           <>
             <PomTimer time={remaining} />
             <Title title={`${remaining} minutes remaining! | Pomato`}/>
             <Favicon
               number={remaining}
               color="white"
               bg="#6f2d2a"
               weight="bold"
               off1={4}
             />
<div>
             <input value={sprintTime} onChange={
               ({target: {value}}) => setSprintTime(value)
             }/>
             <button onClick={reset}>Reset</button>
</div>
           </>
         )
      }}
    </Timer>
  )
}

const App = () => (
  <div className="App">
    <h1>Pomato!</h1>
    <i>
      A simple productivity timer based on the{' '}
      <a href="https://en.wikipedia.org/wiki/Pomodoro_Technique">
        Pomodoro Technique
      </a>
    </i>
    <Blah />
  </div>
)

export default App
