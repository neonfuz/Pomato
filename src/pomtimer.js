import React from 'react'
import { ReactComponent as Pomato } from './pomato.svg'

const PomTimer = ({time}) => (
  <div style={{
    display: 'flex',
    position: 'relative'
  }}>
    <Pomato style={{margin: '3em', zIndex: 1}}/>
    <div style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '8rem',
      fontWeight: 'bold',
      zIndex: 2,
      color: 'white',
      fontFamily: 'Comic Sans MS'
    }}>
      <div style={{marginTop: '4rem'}}>
        {time}
      </div>
    </div>
  </div>
)

export default PomTimer
