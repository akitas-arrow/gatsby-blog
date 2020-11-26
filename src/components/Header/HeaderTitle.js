import React from 'react'
import styled from "styled-components"
import { Link } from "gatsby"

function HeaderTitle() {
    return (
            <Title as={Link} to="/">
                My Blog
            </Title>
    )
}

const Title = styled.div`
    z-index: 3;
    text-decoration: none;
    padding: 0 8px;
    font-size: 24px;
    line-height: 80px;
    font-family: "Tenor Sans";
    color: #51505D;
    @media (min-width: 769px) {
        font-size: 32px;
    }
`

export default HeaderTitle
