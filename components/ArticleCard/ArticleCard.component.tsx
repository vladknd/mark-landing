import Image from 'next/image';
import React from 'react'
import { Button2, Text2, Text3 } from '../Common.styled';
import { ArticleCardButton, ArticleCardContainer, ArticleCardHeader, ArticleCardText, ArticleContentContainer, ImageContainer } from './ArticleCard.styled'

interface IArticleCard {
  name: string;
  img: string;
  text: string;
}
const ArticleCardComponent = (props: IArticleCard) => {
  return (
    <ArticleCardContainer img={props.img}>
      <ArticleContentContainer>

      <ArticleCardHeader>{props.name}</ArticleCardHeader>
      <ArticleCardText>{props.text}</ArticleCardText>
      <ArticleCardButton
      >Read more</ArticleCardButton>
      </ArticleContentContainer>
      <ImageContainer>
        <Image src={props.img} layout="fill"/>
      </ImageContainer>
    </ArticleCardContainer>
  )
}
export default ArticleCardComponent

