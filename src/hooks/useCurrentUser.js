import { useEffect, useState } from 'react'

export const useCurrentUser = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    const user =
      JSON.parse(localStorage.getItem('currentUser')) ||
      JSON.parse(localStorage.getItem('register_data'))

    if (user) {
      setUser(user)
    }
  }, [])

  return user
}
