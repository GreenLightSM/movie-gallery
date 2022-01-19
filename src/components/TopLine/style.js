import styled from 'styled-components'
import { Wrap as Button } from '../../components/Button/style'

export const Wrap = styled('div')`
  height: 50px;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  z-index: 3;
  width: 100vw;
`

export const Content = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1070px;
  height: 100%;
  margin: 0 auto;
  @media (max-width: 1100px) {
    width: 100vw;
    padding: 0 15px;
  }
`

export const Logo = styled('div')`
  font-size: 24px;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  font-weight: 700;
`
export const Row = styled('div')`
  display: flex;
  ${Button} {
    height: 30px;
    margin-left: 15px;
    font-size: 14px;
    padding: 0 10px;
  }
`

export const Welcome = styled('div')`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  display: flex;
  align-items: center;
`
