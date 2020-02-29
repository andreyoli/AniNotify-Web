import React, { useState } from 'react'

import { Nav, H1, NavGrid, NavLink, CloseMenu, MenuMobile } from './styles'
import { Input, Button } from '../Form'
import ModalSearch from '../ModalSearch'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mobile, setMobile] = useState(false)

  function handleOpenModal() {
    setIsOpen(!isOpen)
  }
  function handleMobile() {
    setMobile(!mobile)
  }

  return (
    <>
      <Nav>
        <H1>AniNotify</H1>
        <Input
          type="search"
          name="search"
          id="search"
          placeholder="Find your favorite anime"
          onClick={handleOpenModal}
        />
        <MenuMobile onClick={handleMobile} />
        <NavGrid className={mobile ? 'mobile-active' : ''}>
          <CloseMenu onClick={handleMobile} />
          <li>
            <NavLink href="#Home" className="active" id="Home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink href="#About" id="About">
              About
            </NavLink>
          </li>
          <li>
            <Button>Sign In</Button>
          </li>
        </NavGrid>
      </Nav>
      {isOpen && (
        <ModalSearch isOpen={isOpen} onRequestClose={handleOpenModal} />
      )}
    </>
  )
}
export default Navbar
