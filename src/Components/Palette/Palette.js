import React, { useState, useEffect } from 'react'
import './Palette.css'
import Color from '../Color/Color'

const ColorPalette = () => {

  const [ID, setID] = useState('')
  const [colors, setColors] = useState([])

  useEffect(() => {
    getID()
    generatePalette()
  }, [])

  useEffect(() => {
    const allColors = colors.map(color => {
      return <Color generateColor={generateHex} hexCode={color} />
    })
  }, [colors])

  const getID = () => {
    setID(Date.now())
  }

  const generatePalette = () => {
    for (var i = 0; i <= 5; i++) {
      const newHue = generateHex()
      setColors((colors) => [...colors, newHue])
    }
  }

  const refreshPalette = () => {
    setColors([])
    generatePalette()
  }

  const generateHex = () => {
    let hexCode = ['#']
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    for (var i = 0; i <= 5; i++) {
        hexCode.push(letters[Math.floor(Math.random() * letters.length)])
    }
    console.log('new color: ', hexCode.join(''))
    return hexCode.join('')
  }

  const allColors = colors.map(color => {
    return <Color generateColor={generateHex} hexCode={color} />
  })

  return (
    <div className='palette'>
      <div className='palette-container'>
        {allColors}
      </div>
      <div className='button-container'>
        <button onClick={refreshPalette}>New Palette</button>
        <button>Save Palette</button>
      </div>
    </div>
  )
}

export default ColorPalette