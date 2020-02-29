import styled from 'styled-components'

export const Button = styled.button`
  border: 1px solid rgba(255, 255, 255, 0.6);
  color: rgba(255, 255, 255, 0.6);
  background: transparent;
  border-radius: 20px;
  padding: 5px 35px;
  text-decoration: none;
  font-size: 18px;
  letter-spacing: 0.05em;
  white-space: nowrap;
  transition: all 500ms;
  outline: none;

  &:hover {
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.6);
    border-color: rgba(255, 255, 255, 0.9);
  }
`
