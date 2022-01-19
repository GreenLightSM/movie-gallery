import styled from 'styled-components'

export const Grid = styled('div')`
  display: grid;
  width: 800px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-top: 15px;
  margin-bottom: 15px;
  @media (max-width: 850px) {
    width: 100%;
    padding: 0 15px;
  }
`
