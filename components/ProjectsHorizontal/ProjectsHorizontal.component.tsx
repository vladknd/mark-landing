import React from 'react'
import ProjectCardComponent from './ProjectCard/ProjectCard.component'
import { ProjectsHorizontalContainer } from './ProjectsHorizontal.styled'

const ProjectsHorizontalComponent = () => {
  return (
    <ProjectsHorizontalContainer>
      <ProjectCardComponent
        name="MobSF"
        img="/mog.png"
      />
      <ProjectCardComponent
        name="Course Platform"
        img="/coursePlatform.png"
      />
      <ProjectCardComponent
        name="Mineshare"
        img="/mineshare.png"
      />
      <ProjectCardComponent
        name="Homepod"
        img="/homepod.png"
      />
      <ProjectCardComponent
        name="Metacark"
        img="/metacark.png"
      />
    </ProjectsHorizontalContainer>
  )
}
export default ProjectsHorizontalComponent

