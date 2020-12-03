import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'

function PageNation({pageContext}) {
    console.log(pageContext.numberOfPages)

    return (
        <PageNumbers>
            <PageNationButton>
                <PageNumber>
                    {
                        pageContext.previousPagePath && (
                                <PageLink to={pageContext.previousPagePath}>
                                    <FontAwesomeIcon icon={faAngleLeft} color='#51505d'/>&emsp;PREV
                                </PageLink>
                        )
                    }
                </PageNumber>
            </PageNationButton>
            <PageNumber>
                {`${pageContext.humanPageNumber} / ${pageContext.numberOfPages}`}
            </PageNumber>
            <PageNationButton>
                <PageNumber>
                    {
                        pageContext.nextPagePath && (
                                <PageLink to={pageContext.nextPagePath}>
                                    NEXT&emsp;<FontAwesomeIcon icon={faAngleRight} color='#51505d'/>
                                </PageLink>
                        )
                    }
                </PageNumber>
            </PageNationButton>
        </PageNumbers>
    )
}

const PageNumbers = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    width: 100%;
    color: #51505d;
    @media (min-width: 769px) {
        margin: 0 auto;
        max-width: 800px;
    }
`

const PageNationButton = styled.div`
    width: 74px;
    @media (min-width: 769px) {
        width: 83px;
    }
`

const PageNumber = styled.p`
    font-size: 16px;
    font-family: "Tenor Sans";
    @media (min-width: 769px) {
        font-size: 18px;
    }
`

const PageLink = styled(Link)`
    text-decoration: none;
    color: #51505d;
`
export default PageNation
