import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const TopImage = ({ className }) => {
    const { mobileImage, desktopImage } = useStaticQuery(
        graphql`
            query {
                mobileImage: file(relativePath: { eq: "top.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 490, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                desktopImage: file(relativePath: { eq: "top.jpg" }) {
                    childImageSharp {
                        fluid(quality: 100, maxWidth: 4160) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `
    )

    const sources = [
        mobileImage.childImageSharp.fluid,
        {
            ...desktopImage.childImageSharp.fluid,
            media: `(min-width: 491px)`,
        },
    ]

    return (
        <BackgroundImage
            Tag="section"
            className={className}
            fluid={sources}
            backgroundColor={`#040e18`}
        >
        </BackgroundImage>
    )
}

const StyledTopImage = styled(TopImage)`
    width: 100%;
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: cover;
    background-attachment: fixed;
    min-height: 75vh;
`

export default StyledTopImage