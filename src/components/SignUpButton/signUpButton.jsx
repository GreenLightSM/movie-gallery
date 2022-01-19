import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import Button from '../Button/button'

const SignUpButton = () => {
  const { isSignUpNotFinished } = useAuth()

  return (
    <Button
      text={isSignUpNotFinished ? 'Resume Sign Up' : 'Sign up'}
      to={'/sign-up'}
      style={{ backgroundColor: '#91C483' }}
    />
  )
}

export default SignUpButton
