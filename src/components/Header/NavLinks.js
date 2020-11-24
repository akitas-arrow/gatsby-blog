import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

function NavLinks() {
    return (
        <NavItem to={"/"}>ABOUT</NavItem>
    )
}

const NavItem = styled(Link)`
    text-decoration: none;
    font-family: "Tenor Sans";
    font-size: 20px;
    color: #51505D;
    @media (min-width: 769px) {
        font-size: 24px;
    }
`

export default NavLinks
