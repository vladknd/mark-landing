import Image from 'next/image'
import React from 'react'
import { Text2 } from '../../Common.styled'
import { 
  ProjectCardContainer, 
  ProjectCardImage 
} from './ProjectCard.styled'

interface IProjectCard {
  name: string;
  img: string;
}
const ProjectCardComponent = (props: IProjectCard) => {
  return (
    <ProjectCardContainer>
      <ProjectCardImage>
        <Image src={props.img}
          layout="fill"
        />
      </ProjectCardImage>
      <Text2>
        {props.name}
      </Text2>
    </ProjectCardContainer>
  )
}
export default ProjectCardComponent

