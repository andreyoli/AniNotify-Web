import React from 'react'

import { Header, H1, Input, NavGrid, Button, A } from './styles'

const navbar = () => (
  <Header>
    <H1>AniNotify</H1>
    <Input
      type="search"
      name="search"
      id="search"
      placeholder="Find your favorite anime"
    />
    <NavGrid>
      <div id="grid-nav">
        <div>
          <A href="#Home" class="active" id="Home">
            Home
          </A>
        </div>
        <div>
          <A href="#About" id="About">
            About
          </A>
        </div>
        <div>
          <Button>Sign In</Button>
        </div>
      </div>
    </NavGrid>
  </Header>
)

export default navbar
