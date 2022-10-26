import React from 'react'
import HeaderComponent from '../Header/Header.component'
import { ContentContainer, LayoutContainer } from './Layout.styled'

const LayoutComponent = (props: any) => {
  return (
    <LayoutContainer>
      <HeaderComponent/>
      <ContentContainer>
        {props.children}
      </ContentContainer>
    </LayoutContainer>
  )
}
export default LayoutComponent

