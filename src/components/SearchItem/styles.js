import styled from 'styled-components'

export const Container = styled.a`
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: row;
  min-width: 99%;
  max-width: 99%;
  max-height: 150px;
  min-height: 150px;
  padding: 1.5%;
  text-decoration: none;
  overflow: hidden;
  text-align: justify;

  img {
    transition: all 300ms;
    margin-right: 2%;
  }
  div {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
  strong {
    align-self: flex-end;
    white-space: nowrap;
  }
  &&:hover {
    img {
      margin-right: 3%;
    }
  }
`
