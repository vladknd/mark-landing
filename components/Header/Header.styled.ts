import styled from 'styled-components'
import { Button1 } from '../Common.styled'

export const HeaderContainer = styled.div`
    position: fixed;
    z-index: 5;
    /* margin: 0% 2%; */
    /* padding-left: 10px; */
    /* padding-right: 10px; */

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 10vh;

    background-color: rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
    /* opacity: 0.3; */
`

 export const LogoContainer = styled.div`
    position: relative;

    width: 11%;
    height: 40%;

    /* background: red; */
 `

 export const LinksContainer = styled.div`
 `

 export const ContactButton = styled(Button1)`
    width: 12%;
    height: 60%;

    border-radius: 1vw;

    font-size: 1.1vw;
 `