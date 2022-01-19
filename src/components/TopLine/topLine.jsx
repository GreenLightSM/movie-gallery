import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { useCurrentUser } from '../../hooks/useCurrentUser'
import Button from '../Button/button'
import SignUpButton from '../SignUpButton/signUpButton'
import { Content, Logo, Row, Welcome, Wrap } from './style'

const TopLine = () => {
  const { isLoggedIn } = useAuth()
  const { name } = useCurrentUser()
  const navigate = useNavigate()

  const logOut = () => {
    localStorage.removeItem('currentUser')
    navigate('/')
  }

  return (
    <Wrap>
      <Content>
        <Logo>Gallery</Logo>
        <Row>
          {isLoggedIn ? (
            <>
              <Welcome>Welcome, {name}</Welcome>
              <Button text={'Log Out'} onClick={logOut} />
            </>
          ) : (
            <>
              {' '}
              <Button text={'Sign In'} to={'/sign-in'} />
              <SignUpButton />
            </>
          )}
        </Row>
      </Content>
    </Wrap>
  )
}

export default TopLine
