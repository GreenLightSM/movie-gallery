import styled from 'styled-components'

export const Wrap = styled('div')`
  height: 30px;
  border-radius: 50px;
  background-color: rgba(0, 0, 0, 0.7);
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
`

export const Dot = styled('div')`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: ${({ active }) =>
    active ? '#fff' : 'rgba(255,255,255, .5)'};
  cursor: pointer;
`
