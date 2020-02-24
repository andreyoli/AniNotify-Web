import styled from 'styled-components'

const Header = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 30px 0;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
`
const H1 = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 24px;
`

const Input = styled.input`
  justify-self: center;
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  padding: 10px;
  font-size: 18px;
  outline: none;
  transition: all 500ms;

  &:hover {
    border-color: rgba(255, 255, 255, 0.9);
  }
  &::placeholder {
    text-align: center;
  }
`
const NavGrid = styled.nav`
  #grid-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    margin: 0 0 0 20%;
    align-self: flex-end;
  }
`

const Button = styled.button`
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 20px;
  padding: 5px 35px;
  color: rgba(255, 255, 255, 0.6);
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

const A = styled.a`
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: all 500ms;

  &:hover {
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.6);
  }

  &.active {
    color: rgba(255, 255, 255, 1);
  }
`

export { Header, H1, Input, NavGrid, Button, A }
