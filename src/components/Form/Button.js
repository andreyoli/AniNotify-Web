import styled from 'styled-components'
import { opacify } from 'polished'

export const Button = styled.button`
  border: 1px solid ${props => opacify(-0.3, props.theme.colors.primary)};
  color: ${props => opacify(-0.3, props.theme.colors.primary)};
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
    color: ${props => opacify(1, props.theme.colors.primary)};
    text-shadow: 0 0 3px ${props => opacify(-0.6, props.theme.colors.primary)};
    border-color: ${props => opacify(1, props.theme.colors.primary)};
  }
`
