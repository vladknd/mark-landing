import Image from 'next/image'
import React from 'react'
import { Button1 } from '../Common.styled'
import { 
  ContactButton,
  HeaderContainer, 
  LinksContainer, 
  LogoContainer 
} from './Header.styled'
import NavigationLinksComponent from './NavigationLinks/NavigationLinks.component'

const HeaderComponent = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Image src="/Logo.png" layout="fill"/>
      </LogoContainer>
      <NavigationLinksComponent/>
      <ContactButton>
        CONTACT
      </ContactButton>
    </HeaderContainer>
  )
}
export default HeaderComponent

