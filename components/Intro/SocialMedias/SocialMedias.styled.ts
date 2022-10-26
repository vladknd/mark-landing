import styled from 'styled-components'

export const SocialMediasContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;


`
export const Icon = styled.div`
  position: relative;

  width: 5vw;
  height: 10vh;

  &:hover{
    cursor: pointer;
    opacity: 0.8;
  }
  &:hover:active{
    cursor: pointer;
    opacity: 0.9;
  }
`