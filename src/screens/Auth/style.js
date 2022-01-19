import styled from 'styled-components'

export const Wrap = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

export const Block = styled('div')`
  width: 500px;
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
`

export const FormWrap = styled('form')`
  display: flex;
  flex-direction: column;
  input {
    margin-bottom: 15px;
  }
`

export const TabButton = styled('div')`
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  border-bottom: 4px solid
    ${({ active }) => (active ? 'var(--accent)' : '#fff')};
  font-weight: 700;
  margin-right: 15px;
  text-decoration: none;
  a {
    color: ${({ active }) => (active ? '#000' : '#eaeaea')};
    text-decoration: none;
  }
`

export const Row = styled('div')`
  display: flex;
  margin-bottom: 15px;
`

export const Welcome = styled('div')`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 15px; ;
`
