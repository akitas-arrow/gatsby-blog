import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => {
    const data = useStaticQuery(
        graphql`
            query {
                desktop: file(relativePath: { eq: "top.jpg" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 1920) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `
    )

  // Set ImageData.
    const imageData = data.desktop.childImageSharp.fluid

    return (
        <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            backgroundColor={`#040e18`}
        />
    )
        {/* <h2>gatsby-background-image</h2>
        </BackgroundImage> */}
    
}

const StyledBackgroundSection = styled(BackgroundSection)`
    width: 100%;
    height: 640px;
    background-position: center;
    background-size: cover;
`

export default StyledBackgroundSection