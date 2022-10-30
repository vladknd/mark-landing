import styled from 'styled-components'
import { Button2, Text2, Text3 } from '../Common.styled'

interface IArticleCardContainer {
    img: string
}
export const ArticleCardContainer = styled.div`
    position: relative;
    margin: 1vw;
    /* padding: 5px; */
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: start;

    /* background: url(${(props: IArticleCardContainer) => props.img}); */
    /* background-color: red; */
    /* background-position: center; */
    
    width: 26vw;
    height: 43vh;
    border-radius: 2vw;
`
export const ArticleContentContainer = styled.div`
    z-index: 1;

    padding: 1vw;
`
export const ImageContainer = styled.div`
    position: absolute;
    z-index:-1;

    border-radius: 2vw;
    width: 100%;
    height: 100%;
`

export const ArticleCardHeader = styled(Text3)`
    font-size: 1.4vw;
`

export const ArticleCardText = styled(Text3)`
    font-size: 1.2vw;

    opacity: 0.5;
`

export const ArticleCardButton = styled(Button2)`
    width: 9vw;
    height: 5vh;

    border-radius: 0.5vw;
`