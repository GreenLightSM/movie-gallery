import { useEffect, useState } from 'react'
import { fetchData } from '../helpers/fetchData'

export const useData = () => {
  const [state, setState] = useState([])
  const [offset, setOffset] = useState(0)

  const fetchMore = () => {
    setOffset((offset) => offset + 20)
  }

  useEffect(() => {
    const data = fetchData(offset)
    setState([...state, ...data])
  }, [offset])

  return { data: state, fetchMore }
}
