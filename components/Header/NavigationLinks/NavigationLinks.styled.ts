import styled from 'styled-components'
import Link from 'next/link'
export const NavigationLinksContainer = styled.div`
width: 40%;
`

export const NavLink = styled.a`
    margin: 0% 4%;
    position: relative;
    font-size: 1.2vw;
    color: black;
    text-decoration: none;

    &:hover {
        &::after {
            content: "";
            position: absolute;
      
            top: 150%;
            right: 0%;

            display: block;

            width: 100%; 
            height: 2px;

            border-radius: 20px;
            background: black;
        }
    }
    
`

export const LinkContainer = styled(Link)`
    /* position: relative; */
`