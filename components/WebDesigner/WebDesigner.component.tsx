import Image from 'next/image'
import React from 'react'
import { Header1, Text1 } from '../Common.styled'
import { ButtonsContainer, ContentContainer, DesignsButton, FigmaImage, PricesButton, PsImage, WebDesignerContainer } from './WebDesigner.styled'

const WebDesignerComponent = () => {
  return (
    <WebDesignerContainer>
      <PsImage>
        <Image src="/ps.svg"
          layout="fill"
        />
      </PsImage>
      <ContentContainer>
        <Text1>
          I AM
        </Text1>
        <Header1>
          Web-Designer. 
        </Header1>
        <Text1>
          I've worked on more than ten completely finished 
          projects and have more than two years of expertise 
          in UX/UI design. All of my clients are satisfied 
          with the outcomes and so will you!
        </Text1>
        <ButtonsContainer>
          <DesignsButton>
            View Designs
          </DesignsButton>
          <PricesButton>
            See the Prices
          </PricesButton>
        </ButtonsContainer>
      </ContentContainer>
      <FigmaImage>
        <Image src="/figma.svg"
          layout="fill"
        />
      </FigmaImage>
    </WebDesignerContainer>
  )
}
export default WebDesignerComponent

