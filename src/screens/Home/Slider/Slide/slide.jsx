import React from 'react'
import { Content, Description, Rating, Title, Wrap } from './style'

const Slide = ({ item: { title, description, rating, img } }) => {
  return (
    <Wrap bg={img}>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Rating>{rating}</Rating>
      </Content>
    </Wrap>
  )
}

export default Slide
