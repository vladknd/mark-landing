import styled from 'styled-components'

interface IText {
  size?: string;
}
export const Text1 = styled.p`
  font-size: ${(props:IText) => props.size ||"1.8vw"};
  color: #808080;
`
export const Text2 = styled.p`
  font-size: ${(props:IText) => props.size ||"1.8vw"};
  font-weight: bold;
  color: #404040;
`
export const Text3 = styled.p`
  font-size: ${(props:IText) => props.size ||"1.8vw"};
  font-weight: bold;
  color: white;
`

export const Header1 = styled.h1`
  margin: 0%;
  min-height: 8vh;
    /* Fallback: Set a background color. */
  background-color: red;
  /* Create the gradient. */
  background-image: 
    linear-gradient(
        133.19deg, 
        #FFD371 -2.04%, 
        #FF8FAC 10.17%, 
        #95D7FF 27.36%, 
        #48FFFE 123.1%
    );
  ;
  
  /* Set the background size and repeat properties. */
  background-size: 100%;
  /* background-repeat: repeat; */

  font-size: 4.5vw;
  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`

interface IButton {
  width?: string;
  height?: string;
  br?: string;
}
export const Button1 = styled.button`
    
    color: white;

    background: #1E1E1E;

    border: none;
    &:hover {
        cursor: pointer;
    }
    border-radius: 1vw;

    font-size: 1.1vw;

    /* width: ${(props: IButton) => props.width || "10vw"}; */
    /* height: ${(props: IButton) => props.height || "4vh"}; */
`
export const Button2 = styled.button`
  color: black;
  background: white;

  /* width: ${(props: IButton) => props.width || "10vw"}; */
  /* height: ${(props: IButton) => props.height || "4vh"}; */

  border: none;
  &:hover {
      cursor: pointer;
  }
  /* border-radius: 1vw; */
  /* border-radius: ${(props: IButton) => props.br || "1vw"}; */
  font-size: 1.1vw;
`

export const VBar = styled.div`
  margin: 4%;
  width: 1px;
  height: 4vh;
  border-radius: ${(props: IButton) => props.br || "1vw"};
  background-color: black;
`
