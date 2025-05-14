import React, { useState } from 'react'

const Goodbye = (props: { name?: string }) => {
  const [txtColor, setTxtColor] = useState('blue')

  const changeColor = () => {
    setTxtColor('red')
  }

  const revertColor = () => {
    setTxtColor('blue')
  }

  return (
    <h1
      style={{ color: txtColor }}
      onMouseEnter={changeColor}
      onMouseLeave={revertColor}
    >
      Goodbye {props.name || 'World'}
    </h1>
  )
}

export default Goodbye
