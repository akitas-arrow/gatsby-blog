import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const TopImage = ({ className }) => {
    const data = useStaticQuery(
        graphql`
            query {
                desktop: file(relativePath: { eq: "top.jpg" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 1700) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `
    )

    const imageData = data.desktop.childImageSharp.fluid

    return (
        <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            backgroundColor={`#040e18`}
        >
            <Content></Content>
        </BackgroundImage>
    )
}

const StyledTopImage = styled(TopImage)`
    width: 100%;
    height: auto;
    background-position: center;
    background-size: cover;
`

const Content = styled.div`
    width: 100%;
    padding-top: 70%;
    @media (min-width: 769px) {
        padding-top: 640px;
    }
`

export default StyledTopImage