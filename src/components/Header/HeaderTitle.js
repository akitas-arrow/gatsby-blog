import React from 'react'
import styled from "styled-components"
import { Link } from "gatsby"
import { graphql, useStaticQuery} from 'gatsby'

function HeaderTitle() {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "cocolo-icon.svg"}){
                publicURL
            }
        }
    `)

    return (
        <TitleBlock as={Link} to="/">
            <TitleImg src={data.file.publicURL} alt='cocolo'/>
            <Title>
                COCOLO
            </Title>
        </TitleBlock>
    )
}

const TitleBlock = styled.div`
    display: flex;
    text-decoration: none;
    z-index: 3;
`

const TitleImg = styled.img`
    margin: 24px 0;
    height: 32px;
    @media (min-width: 769px) {
        margin: 16px 0;
        height: 48px;
    }
`
const Title = styled.div`
    display: flex;
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
