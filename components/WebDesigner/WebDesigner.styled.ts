import styled from 'styled-components'
import { Button1 } from '../Common.styled'

export const WebDesignerContainer = styled.div`
    /* padding: 4vw 6vw; */

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    /* width: 20vw; */
    /* height: 100vh; */
`

export const ContentContainer = styled.div`
    padding: 0vw 5vw;

    line-height: 6vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 50vw;
`

export const DesignsButton = styled(Button1)`
    margin: 0vw 1vw;
    width: 12vw;
    height: 6vh;
`

export const PricesButton = styled(Button1)`
    margin: 0vw 1vw;

    width: 12vw;
    height: 6vh;
`

export const PsImage = styled.div`
    position: relative;
    width: 25vw;
    height: 90vh;
`

export const FigmaImage = styled.div`
    position: relative; 
    width: 25vw;
    height: 90vh;
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`