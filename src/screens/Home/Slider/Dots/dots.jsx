import React from 'react'
import { Dot, Wrap } from './style'

const Dots = ({ active, slides, onClick }) => {
  return (
    <Wrap>
      {slides.map((item) => (
        <Dot
          key={item.key}
          active={active === item.key}
          onClick={() => onClick(item.key)}
        />
      ))}
    </Wrap>
  )
}

export default Dots
