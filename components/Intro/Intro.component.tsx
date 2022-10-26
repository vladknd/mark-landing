import Image from 'next/image'
import React from 'react'
import { Header1, Text1 } from '../Common.styled'
import { ButtonsContainer, ExploreButton, PersonalInformation, InfoContent, IntroContainer, PlayButton, CompaniesContainer, CompanyImage } from './Intro.styled'
import SocialMediasComponent from './SocialMedias/SocialMedias.component'

const IntroComponent = () => {
  return (
    <IntroContainer>
    <PersonalInformation>
      <InfoContent>
        <Header1>
          UI/UX Designer. <br/>
          Developer. <br/>
          Writer. <br/>
        </Header1>
        <Text1>
          My experience will fit your dreams
          and will bring them to life. Look what I
          can provide and contact immediately!
        </Text1>
        <ButtonsContainer>
          <ExploreButton>Explore now</ExploreButton>
          <PlayButton>
            <Image src="/play.svg" layout='fill'/>
          </PlayButton>
        </ButtonsContainer>
      </InfoContent>

      <SocialMediasComponent/>
    </PersonalInformation>
    <CompaniesContainer>
      <CompanyImage>
        <Image src="/imgly.svg" layout="fill"/>
      </CompanyImage>
      <CompanyImage>
        <Image src="/aviyel.svg" layout="fill"/>
      </CompanyImage>
      <CompanyImage>
        <Image src="/metamark.png" layout="fill"/>
      </CompanyImage>
      <CompanyImage>
        <Image src="/abstract.svg" layout="fill"/>
      </CompanyImage>
    </CompaniesContainer>
    </IntroContainer>
  )
}
export default IntroComponent

