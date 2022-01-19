import styled from 'styled-components'

export const Wrap = styled('div')`
  background-image: url(${({ bg }) => bg});
  background-size: cover;
`

export const Content = styled('div')`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  height: 100vh;
  width: 1070px;
  margin: 0 auto;
  @media (max-width: 1100px) {
    width: 100vw;
    padding: 0 15px;
  }
`

export const Title = styled('div')`
  font-family: 'Roboto', sans-serif;
  font-size: 72px;
  color: #fff;
  font-weight: 700;
  @media (max-width: 650px) {
    font-size: 48px;
    line-height: 60px;
  }
`

export const Description = styled('div')`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #fff;
  font-weight: 400;
  max-width: 600px;
  line-height: 1.5em;
  font-weight: 500;
  @media (max-width: 650px) {
    font-size: 14px;
  }
`

export const Rating = styled('div')`
  height: 20px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  color: #000;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  border-radius: 5px;
  background-color: #ffe162;
  margin-top: 20px;
`
