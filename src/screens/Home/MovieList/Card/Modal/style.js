import styled from 'styled-components'

export const Overlay = styled('div')`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`

export const Wrap = styled('div')`
  width: 600px;
  padding: 30px 30px 10px 30px;
  border-radius: 20px;
  background-color: #fff;
  position: relative;
  @media (max-width: 600px) {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
  }
`
export const Title = styled('div')`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #000;
`

export const Description = styled('div')`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #000;
  margin-bottom: 20px;
  margin-top: 5px;
`

export const Close = styled('img')`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`
