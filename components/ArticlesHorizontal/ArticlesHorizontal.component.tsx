import React from 'react'
import ArticleCardComponent from '../ArticleCard/ArticleCard.component'
import { ArticlesHorizontalContainer } from './ArticlesHorizontal.styled'

const ArticlesHorizontalComponent = () => {
  return (
    <ArticlesHorizontalContainer>
      <ArticleCardComponent 
        name="9 VSCode Extensions You Definitely Need As A Developer" 
        img="/article1.png"
        text="It would help if you had these extensions to 
              improve your workflow, reduce the number of 
              bugs"
      />
      <ArticleCardComponent 
        name="9 VSCode Extensions You Definitely Need As A Developer" 
        img="/article2.png"
        text="It would help if you had these extensions to 
              improve your workflow, reduce the number of 
              bugs"
      />
      <ArticleCardComponent 
        name="9 VSCode Extensions You Definitely Need As A Developer" 
        img="/article3.png"
        text="It would help if you had these extensions to 
              improve your workflow, reduce the number of 
              bugs"
      />
    </ArticlesHorizontalContainer>
  )
}
export default ArticlesHorizontalComponent

