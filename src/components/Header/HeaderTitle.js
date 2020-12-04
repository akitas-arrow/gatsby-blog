import React from 'react'
import styled from "styled-components"
import { Link } from "gatsby"
// import { graphql, useStaticQuery} from 'gatsby'
// import Img from "gatsby-image"

function HeaderTitle() {
    // const data = useStaticQuery(graphql`
    //     query {
    //         allContentfulTag {
    //             edges {
    //                 node {
    //                     name
    //                     slug
    //                 }
    //             }
    //         }
    //     }
    // `)

    return (
            <Title as={Link} to="/">
                COCOLO
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
