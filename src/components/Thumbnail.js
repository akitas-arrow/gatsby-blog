import React from 'react'
import Image from 'gatsby-image'
// import BackgroundImage from 'gatsby-background-image'
// import styled from 'styled-components'

function Thumbnail({ fluid }) {
    return (
            <Image 
                fluid={fluid}
                objectFit="cover"
                objectPosition="50% 50%"
                alt=""
            />
    )

}



export default Thumbnail
