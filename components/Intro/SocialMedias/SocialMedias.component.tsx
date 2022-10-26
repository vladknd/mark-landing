import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { VBar } from '../../Common.styled'
import { Icon, SocialMediasContainer } from './SocialMedias.styled'


interface IMediaComponent {
  to: string;
  img: string;
}
export const MediaComponent = (props: IMediaComponent) => {
  return (
    <Link href={props.to}>
      <Icon>
        <Image src={props.img} layout="fill"/>
      </Icon>
    </Link>
  )
}


const SocialMediasComponent = () => {
  return (
    <SocialMediasContainer>
      <VBar/>
      <MediaComponent to="" img="/medium.svg"/>
      <MediaComponent to="" img="/discord.svg"/>
      <MediaComponent to="" img="/linkedin.svg"/>
      <MediaComponent to="" img="/behance.svg"/>
      <MediaComponent to="" img="/twitter.svg"/>
      <VBar/>
    </SocialMediasContainer>
  )
}
export default SocialMediasComponent

