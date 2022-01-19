import React, { useEffect, useState } from 'react'
import thumbDown from '../../../../assets/images/thumb-down.png'
import Button from '../../../../components/Button/button'
import { useAuth } from '../../../../hooks/useAuth'
import Modal from './Modal/modal'
import { Content, Icon, ImageWrap, Info, Title, Wrap } from './style'

const Card = ({
  item: {
    poster,
    title,
    genre,
    director,
    year,
    imdbrating,
    plot,
    writer,
    actors,
  },
}) => {
  const { isLoggedIn } = useAuth()
  const [visible, setVisible] = useState(false)

  const modalProps = {
    plot,
    writer,
    actors,
    imdbrating,
  }

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [visible])

  return (
    <Wrap>
      {visible && <Modal {...modalProps} onClose={() => setVisible(false)} />}
      <ImageWrap>
        <img src={poster} alt={title} />
        <Title>
          {title}
          {+imdbrating < 7 && (
            <Icon>
              <img src={thumbDown} alt='thumb-icon' />
            </Icon>
          )}
        </Title>
      </ImageWrap>
      {isLoggedIn && (
        <Content>
          <Info>
            Genre - <span>{genre}</span>
          </Info>
          <Info>
            Director - <span>{director}</span>
          </Info>
          <Info>
            Year - <span>{year}</span>
          </Info>
          <Button text={'More info'} onClick={() => setVisible(true)} />
        </Content>
      )}
    </Wrap>
  )
}

export default Card
