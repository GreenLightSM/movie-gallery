import styled from 'styled-components'

export const InputStyled = styled('input')`
  outline: none !important;
  border: 1px solid ${({ error }) => (error ? 'red' : '#eaeaea')};
  border-radius: 10px;
  height: 50px;
  padding: 0 15px;
  color: #000;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  margin-bottom: ${({ error }) => '0 !important'};
`

export const Error = styled('div')`
  font-size: 12px;
  color: red;
  font-family: 'Roboto', sans-serif;
  margin: 10px 0;
`
