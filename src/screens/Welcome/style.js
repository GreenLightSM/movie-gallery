import styled from 'styled-components'
import { Wrap as Button } from '../../components/Button/style'

export const Wrap = styled('div')`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(112.47deg, #4b134f 12.16%, #c94b4b 97.01%);
`

export const Title = styled('div')`
  font-family: 'Roboto', sans-serif;
  font-size: 48px;
  color: #fff;
  font-weight: 700;
  margin-bottom: 25px;
`

export const ButtonsContainer = styled('div')`
  width: 200px;
  padding: 25px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  ${Button} {
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`
