import styled from 'styled-components'

export const Ul = styled.ul`
  list-style: none;
  min-width: 98%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  li {
    margin: 50px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    li {
      margin: 0;
    }
  }
`
