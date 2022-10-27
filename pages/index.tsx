import React from 'react'
import IntroComponent from '../components/Intro/Intro.component'
import LayoutComponent from '../components/Layout/Layout.component'
import ProjectsHorizontalComponent from '../components/ProjectsHorizontal/ProjectsHorizontal.component'
import WebDesignerComponent from '../components/WebDesigner/WebDesigner.component'

const Home = () => {
  return (
    <LayoutComponent>
      <IntroComponent/>
      <WebDesignerComponent/>
      <ProjectsHorizontalComponent/>
    </LayoutComponent>
  )
}

export default Home
