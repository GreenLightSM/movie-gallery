import React from 'react'
import { Link } from 'react-router-dom'
import { Wrap } from './style'

const Button = ({ text, onClick, to, style }) => {
  return (
    <Wrap as={to ? Link : 'button'} onClick={onClick} to={to} style={style}>
      {text}
    </Wrap>
  )
}

export default Button
