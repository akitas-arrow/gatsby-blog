import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

function PageNation({pageContext}) {
    console.log(pageContext.numberOfPages)

    return (
        <PageNumbers>
            <PageLink to={pageContext.previousPagePath}>&lt;</PageLink>
            
            <PageLink to={pageContext.nextPagePath}>&gt;</PageLink>
        </PageNumbers>
    )
}

const PageNumbers = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: center;
`

const PageLink = styled(Link)`
    text-decoration: none;
`

export default PageNation
