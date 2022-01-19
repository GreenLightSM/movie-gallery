import React from 'react'
import close from '../../../../../assets/images/close.png'
import { Close, Description, Overlay, Title, Wrap } from './style'

const Modal = ({ onClose, plot, writer, actors, imdbrating }) => {
  return (
    <Overlay onClick={onClose}>
      <Wrap onClick={(e) => e.stopPropagation()}>
        <Close src={close} alt={'close-icon'} onClick={onClose} />

        <Title>Plot</Title>
        <Description>{plot}</Description>
        <Title>Writer</Title>
        <Description>{writer}</Description>
        <Title>Actors</Title>
        <Description>{actors}</Description>
        <Title>IMDB Rating</Title>
        <Description>{imdbrating}</Description>
      </Wrap>
    </Overlay>
  )
}

export default Modal
