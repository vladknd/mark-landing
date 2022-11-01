import Image from 'next/image'
import React from 'react'
import { Header1, Text1, Text2 } from '../Common.styled'
import { 
  ButtonsContainer, 
  ContentContainer, 
  DesignsButton, 
  FigmaImage, 
  PricesButton, 
  PsImage, 
  IamContainer 
} from './Iam.styled'

interface IIam {
  text: string;
  who: string;
  imgL: string;
  imgR: string;
}
const IamComponent = (props: IIam) => {
  return (
    <IamContainer>
      <PsImage>
        <Image src={props.imgL}
          layout="fill"
        />
      </PsImage>
      <ContentContainer>
        <Text1>
          i am
        </Text1>
        <Header1>
          {props.who}
        </Header1>
        <Text1>
          {props.text}
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
        <Image src={props.imgR}
          layout="fill"
        />
      </FigmaImage>
    </IamContainer>
  )
}
export default IamComponent

