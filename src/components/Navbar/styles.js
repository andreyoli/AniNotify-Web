import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import { AiOutlineMenu } from 'react-icons/ai'

export const MenuMobile = styled(AiOutlineMenu)`
  cursor: pointer;
  display: none;
  @media (max-width: 1024px) {
    display: inline-block;
    width: 2em;
    height: 2em;
  }
`

export const CloseMenu = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  width: 5em;
  height: 5em;
  top: 0;
  right: 0;
  margin: 50px;
  display: none;

  @media (max-width: 1024px) {
    display: block;
    width: 4em;
    height: 4em;
    margin: 20px;
  }
`

export const Nav = styled.nav`
  width: 90%;
  max-width: 1450px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  padding: 30px 0;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  height: 100px;
  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`
export const H1 = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 24px;
  @media (max-width: 1024px) {
    display: none;
  }
`
export const NavGrid = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0 0 0 20%;
  align-self: flex-end;

  li {
    margin: 5px;
  }

  @media (max-width: 1024px) {
    display: none;
    &.mobile-active {
      display: flex;
      opacity: 1;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: rgba(0, 0, 0, 1);
      li {
        margin: 15px;
      }
    }
  }
`

export const NavLink = styled.a`
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

  @media (max-width: 1024px) {
    font-size: 30px;
  }
`
