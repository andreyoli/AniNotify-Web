import styled from 'styled-components'

export const Input = styled.input`
  justify-self: center;
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  padding: 10px;
  font-size: 18px;
  outline: none;
  transition: all 500ms;
  background-color: transparent;
  padding: 5px 10px;

  &:hover {
    border-color: rgba(255, 255, 255, 0.9);
  }
  &::placeholder {
    text-align: center;
  }

  @media (max-width: 768px) {
    &&[type='search']::-webkit-search-cancel-button {
      /* Remove default */
      -webkit-appearance: none;
    }
  }
`
