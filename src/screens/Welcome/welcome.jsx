import React from 'react'
import Button from '../../components/Button/button'
import SignUpButton from '../../components/SignUpButton/signUpButton'
import { ButtonsContainer, Title, Wrap } from './style'

const Welcome = () => {
  return (
    <Wrap>
      <Title>Welcome</Title>
      <ButtonsContainer>
        <SignUpButton />
        <Button text={'Sign In'} to={'/sign-in'} />
        <Button
          text={'Browse'}
          style={{ backgroundColor: '#fff', color: '#000' }}
          to={'/home'}
        />
      </ButtonsContainer>
    </Wrap>
  )
}

export default Welcome
