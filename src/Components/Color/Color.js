import React, { useState, useEffect } from 'react'
import './Color.css'

const Color = ({ hexCode, generateColor }) => {

  const [isLocked, setLock] = useState(false)
  const [color, setColor] = useState('')

  useEffect(() => {
    setColor(hexCode)
  }, [])

  const randomizeHex = () => {
    if (!isLocked) {
      setColor(generateColor())
    }
  }

  const lockColor = () => {
    if (!isLocked) {
      setLock(true)
    } else {
      setLock(false)
    }
  }

  return (
    <div>
      <div className='color'>
        <div className='color-display'
          onClick={randomizeHex}
          style={{ backgroundColor: color }}
        ></div>
        <p className='color-hex' onClick={lockColor}>{color} {isLocked ? '🔓' : '🔒'}</p>
      </div>
    </div>
  )
}

export default Color