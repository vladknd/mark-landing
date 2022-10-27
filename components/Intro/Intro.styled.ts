import styled from 'styled-components'
import { Button1 } from '../Common.styled'

export const IntroContainer = styled.div`
    padding: 4vw 6vw;

    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */

    /* width: 100%; */
    
`
export const PersonalInformation = styled.div`
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    
`

export const InfoContent = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 40%;
    height: 100%;
`

export const ExploreButton = styled(Button1)`
    width: 14vw;
    height: 7vh;
`

export const PlayButton = styled.div`
    width: 5vw;
    height: 5vw;
`

export const ButtonsContainer = styled.div`
    position: relative;

    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
`

export const CompaniesContainer = styled.div`
    margin-top: 4%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    width: 100%;

`
export const CompanyImage = styled.div`
    position: relative;

    width: 14vw;
    height: 5vh;
`