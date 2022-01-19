import React, { useState } from 'react'
import movieTwo from '../../../assets/images/19070-dzhentlmeny_1280x720.jpeg'
import movieThree from '../../../assets/images/photo-manipulation-ge4c5a888e_1920.jpeg'
import movieOne from '../../../assets/images/ticket-g043359d15_1920.jpeg'
import Dots from './Dots/dots'
import Slide from './Slide/slide'
import { Container, Wrap } from './style'

const slides = [
  {
    key: 0,
    title: 'Cool movie #1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet venenatis ligula. Ut nec condimentum mi. Donec iaculis scelerisque quam, sed laoreet nibh fermentum ut. Morbi a suscipit orci. Cras sed sem ipsum.',
    rating: '8.3',
    img: movieOne,
  },
  {
    key: 1,
    title: 'Gentelmen',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet venenatis ligula. Ut nec condimentum mi. Donec iaculis scelerisque quam, sed laoreet nibh fermentum ut. Morbi a suscipit orci. Cras sed sem ipsum.',
    rating: '9.5',
    img: movieTwo,
  },
  {
    key: 2,
    title: 'Cool movie #3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet venenatis ligula. Ut nec condimentum mi. Donec iaculis scelerisque quam, sed laoreet nibh fermentum ut. Morbi a suscipit orci. Cras sed sem ipsum.',
    rating: '9.5',
    img: movieThree,
  },
]

const SLIDES_COUNT = 3

const Slider = () => {
  const [isSwiping, setIsSwiping] = useState(false)
  const [coordinates, setCoordinates] = useState(0)
  const [active, setActive] = useState(0)
  const [tranlsate, setTranslate] = useState({
    old: 0,
    current: 0,
  })
  const [transition, setTransition] = useState(false)

  const onDotClick = (slideNum) => {
    setTransition(true)

    setTranslate({
      old: -(slideNum * window.innerWidth),
      current: -(slideNum * window.innerWidth),
    })

    setActive(slideNum)
  }

  const onSwipe = (e) => {
    if (!isSwiping) return

    setTransition(false)

    const pixelsSwiped = coordinates - (e.clientX || e.touches[0].clientX)

    if (pixelsSwiped > 0) {
      setTranslate((prev) => ({
        ...prev,
        current: tranlsate.old + -pixelsSwiped,
      }))
    } else {
      setTranslate((prev) => ({
        ...prev,
        current: tranlsate.old - pixelsSwiped,
      }))
    }
  }

  const onSwipeEnd = (e) => {
    setTransition(true)
    setIsSwiping(false)

    const pixelsSwiped =
      coordinates - (e.clientX || e.changedTouches[0].clientX)

    if (pixelsSwiped > 0) {
      if (Math.abs(pixelsSwiped) > 200 && active < SLIDES_COUNT - 1) {
        setTranslate({
          old: -(Math.abs(tranlsate.old) + window.innerWidth),
          current: -(Math.abs(tranlsate.old) + window.innerWidth),
        })
        setActive(active + 1)
      } else {
        setTranslate((prev) => ({
          ...prev,
          current: tranlsate.old,
        }))
      }
    } else {
      if (Math.abs(pixelsSwiped) > 200 && active > 0) {
        setTranslate({
          old: tranlsate.old + window.innerWidth,
          current: tranlsate.old + window.innerWidth,
        })
        setActive(active - 1)
      } else {
        setTranslate((prev) => ({
          ...prev,
          current: tranlsate.old,
        }))
      }
    }
  }

  return (
    <Wrap
      onMouseDown={(e) => {
        setCoordinates(e.clientX)
        setIsSwiping(true)
      }}
      onMouseMove={onSwipe}
      onMouseUp={onSwipeEnd}
      onTouchMove={onSwipe}
      onTouchStart={(e) => {
        setCoordinates(e.touches[0].clientX)
        setIsSwiping(true)
      }}
      onTouchEnd={onSwipeEnd}
    >
      <Container translate={tranlsate.current} transition={transition}>
        {slides.map((item) => (
          <Slide item={item} key={item.key} />
        ))}
      </Container>
      <Dots active={active} slides={slides} onClick={onDotClick} />
    </Wrap>
  )
}

export default Slider
