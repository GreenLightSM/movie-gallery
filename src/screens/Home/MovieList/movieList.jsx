import React, { useEffect } from 'react'
import { useData } from '../../../hooks/useData'
import Card from './Card/card'
import { Grid } from './style'

const MovieList = () => {
  const { data, fetchMore } = useData()

  useEffect(() => {
    let isMounted = true
    window.addEventListener('scroll', () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.scrollingElement.scrollHeight
      ) {
        if (isMounted) fetchMore()
      }
    })

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <Grid>
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </Grid>
  )
}

export default MovieList
