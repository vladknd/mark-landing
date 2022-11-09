import React from 'react'
import ArticleCardComponent from '../ArticleCard/ArticleCard.component'
import { ArticlesHorizontalContainer } from './ArticlesHorizontal.styled'

const ArticlesHorizontalComponent = () => {
  return (
    <ArticlesHorizontalContainer>
      <ArticleCardComponent 
        name="9 VSCode Extensions You Definitely Need As A Developer" 
        img="/article5.png"
        text="It would help if you had these extensions to 
              improve your workflow, reduce the number of 
              bugs"
      />
      <ArticleCardComponent 
        name="Why Copywriting is The Most Important Skill Right Now" 
        img="/article2.png"
        text="It would help if you had these extensions to 
              improve your workflow, reduce the number of 
              bugs"
      />
      <ArticleCardComponent 
        name="Boredom is The Key to Productivity And Success" 
        img="/article4.png"
        text="It would help if you had these extensions to 
              improve your workflow, reduce the number of 
              bugs"
      />
    </ArticlesHorizontalContainer>
  )
}
export default ArticlesHorizontalComponent

