import React from 'react'
import IntroComponent from '../components/Intro/Intro.component'
import LayoutComponent from '../components/Layout/Layout.component'
import ProjectsHorizontalComponent from '../components/ProjectsHorizontal/ProjectsHorizontal.component'
import IamComponent from '../components/Iam/Iam.component'
import ArticlesHorizontalComponent from '../components/ArticlesHorizontal/ArticlesHorizontal.component'

const Home = () => {
  return (
    <LayoutComponent>
      <IntroComponent/>
      <IamComponent 
        who="Web-Designer." 
        text="I've worked on more than ten completely finished 
              projects and have more than two years of expertise 
              in UX/UI design. All of my clients are satisfied 
              with the outcomes and so will you!"
        imgL="/ps.svg"
        imgR="/figma.svg"
      />
      <ProjectsHorizontalComponent/>
      <IamComponent 
        who="Writer." 
        text="Own a wealth of copywriting knowledge and 
              experience. Have over than 500,000 views on all of 
              my articles. Usually, I write about technical subjects, 
              but you ask me to write about whatever you like!"
        imgL="/back.svg"
        imgR="/mediumYellow.svg"
      />
      <ArticlesHorizontalComponent/>
      <IamComponent 
        who="Developer." 
        text="I’ve developed a lot of cool desktop apps and 
              unique websites myself. I have a lot of options, like 
              using Wordpress to create a website or React. 
              Pick what best suits you!"
        imgL="/css.svg"
        imgR="/html.svg"
      />
    </LayoutComponent>
  )
}

export default Home
