import React from 'react'
import styled from "styled-components"
import { Link } from "gatsby"

function HeaderTitle() {
    return (
        <TitleWrapper>
            <Title as={Link} to="/">
                My Blog
            </Title>
        </TitleWrapper>
    )
}

const TitleWrapper = styled.div`
    flex: 1;
    /* background-color: blue; */
    text-align: center;
    @media (min-width: 769px) {
        text-align: left;
    }
`

const Title = styled.div`
    text-decoration: none;
    font-size: 24px;
    line-height: 80px;
    font-family: "Tenor Sans";
    color: #51505D;
    @media (min-width: 769px) {
        font-size: 32px;
    }
`

export default HeaderTitle
