import styled from 'styled-components'
import { opacify } from 'polished'

export const Input = styled.input`
  justify-self: center;
  border: 0;
  border-bottom: 1px solid ${props => opacify(-0.6, props.theme.colors.text)};
  padding: 10px;
  font-size: 18px;
  outline: none;
  transition: all 500ms;
  background-color: transparent;
  padding: 5px 10px;

  &:hover {
    border-color: ${props => opacify(1, props.theme.colors.text)};
    &::placeholder {
      color: ${props => opacify(0.3, props.theme.colors.text)};
    }
  }
  &::placeholder {
    text-align: center;
    color: ${props => opacify(-0.6, props.theme.colors.text)};
    transition: all 500ms;
  }

  @media (max-width: 768px) {
    &&[type='search']::-webkit-search-cancel-button {
      /* Remove default */
      -webkit-appearance: none;
    }
  }
`
