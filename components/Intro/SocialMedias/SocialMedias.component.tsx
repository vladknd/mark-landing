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
      <MediaComponent to="https://medium.com/@metamark" img="/medium.svg"/>
      <MediaComponent to="https://discord.gg/vRgHbM9rZj" img="/discord.svg"/>
      <MediaComponent to="https://www.linkedin.com/in/markknd/" img="/linkedin.svg"/>
      <MediaComponent to="https://www.behance.net/metamark" img="/behance.svg"/>
      <MediaComponent to="https://twitter.com/MarkKnd" img="/twitter.svg"/>
      <VBar/>
    </SocialMediasContainer>
  )
}
export default SocialMediasComponent

