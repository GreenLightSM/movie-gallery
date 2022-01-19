import styled from 'styled-components'

export const Wrap = styled('div')`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  border-radius: 20px;
`

export const ImageWrap = styled('div')`
  height: 300px;
  position: relative;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  @media (max-width: 650px) {
    height: 200px;
  }
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    left: 0;
    top: 0;
  }
`

export const Title = styled('div')`
  font-size: 24px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  color: #fff;
  position: absolute;
  bottom: 15px;
  left: 15px;
  @media (max-width: 650px) {
    font-size: 18px;
  }
`

export const Icon = styled('div')`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 20px;
    height: 20px;
  }
`

export const Info = styled('div')`
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  span {
    color: var(--accent);
  }
  @media (max-width: 650px) {
    font-size: 14px;
  }
`

export const Content = styled('div')`
  padding: 15px;
  font-family: 'Roboto', sans-serif;
  background-color: #fff;
  border-radius: 0 0 20px 20px;
  ${Info} {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`
