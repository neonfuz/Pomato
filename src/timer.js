import { useState, useEffect } from 'react'

const useTimer = (interval=1000) => {
  const [cycles, setCycles] = useState(0)
  useEffect(()=>{
    const id = setInterval(() => setCycles(cycles => cycles+1), interval)
    return () => clearInterval(id)
  }, [interval])
  const reset = () => setCycles(0)
  return [cycles, reset]
}

const Timer = ({interval, children}) => children(useTimer(interval))

export default Timer
