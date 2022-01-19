import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useCurrentUser } from '../../hooks/useCurrentUser'
import Form from './form'
import { Block, Welcome, Wrap } from './style'

const Auth = ({ type }) => {
  const { isSignUpNotFinished } = useAuth()
  const { name, email } = useCurrentUser()

  return (
    <Wrap>
      <Block>
        {!isSignUpNotFinished && (
          <Welcome>Welcome back, {name || email}</Welcome>
        )}
        <Form type={type} />
      </Block>
    </Wrap>
  )
}

export default Auth
