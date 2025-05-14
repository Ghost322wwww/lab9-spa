import React from 'react'

const Hello = (props: { name?: string }) => {
  const greeting = `Hello ${props.name || 'World'}`
  return <h1>{greeting}</h1>
}

export default Hello
