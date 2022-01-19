import styled from 'styled-components'

export const Wrap = styled('div')`
  overflow: hidden;
  background: linear-gradient(112.47deg, #4b134f 12.16%, #c94b4b 97.01%);
  min-height: 100vh;
`

export const Container = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, 100vw);
  transform: translateX(${({ translate }) => translate}px);
  transition: ${({ transition }) =>
    transition ? 'all .2s ease-in-out' : 'none'};
`
