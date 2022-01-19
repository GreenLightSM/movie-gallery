import React from 'react'
import TopLine from '../../components/TopLine/topLine'
import MovieList from './MovieList/movieList'
import Slider from './Slider/slider'

const Home = () => {
  return (
    <>
      <TopLine />
      <Slider />
      <MovieList />
    </>
  )
}

export default Home
