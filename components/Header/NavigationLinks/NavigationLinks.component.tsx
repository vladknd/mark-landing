import Link from 'next/link'
import React from 'react'
import { LinkContainer, NavigationLinksContainer, NavLink } from './NavigationLinks.styled'

const NavigationLinksComponent = () => {
  return (
    <NavigationLinksContainer>
      <LinkContainer href="" passHref legacyBehavior>
        <NavLink>Home</NavLink>
      </LinkContainer>

      <LinkContainer href="" passHref legacyBehavior>
        <NavLink>About</NavLink>
      </LinkContainer>

      <LinkContainer href="" passHref legacyBehavior>
        <NavLink>Projects</NavLink>
      </LinkContainer>

      <LinkContainer href="" passHref legacyBehavior>
        <NavLink>Prices</NavLink>
      </LinkContainer>

      <LinkContainer href="" passHref legacyBehavior>
        <NavLink>Blog</NavLink>
      </LinkContainer>
    </NavigationLinksContainer>
    
  )
}
export default NavigationLinksComponent

