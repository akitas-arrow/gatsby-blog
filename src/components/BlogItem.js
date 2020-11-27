import React from 'react'
import { Link } from 'gatsby'
import StyledThumbnail from "./Thumbnail"
import styled from 'styled-components'
import Tag from "./Tag"

function BlogItem({ title, date, src, tag}) {
    return (
        <Container as={Link} to={''}>
            <StyledThumbnail />
            <TextBlock>
                <TextBlockTop>
                    <Title>{ title }</Title>
                    <Date>{ date }</Date>
                </TextBlockTop>
                <TextBlockBottom>
                    <Tag>{ tag }</Tag>
                </TextBlockBottom>
            </TextBlock>
        </Container>
    )
}


const Container = styled.div`
    display: block;
    text-decoration: none;
    margin-bottom: 80px;
    :last-child {
        margin: 0;
    }
    :hover {
        opacity: 0.7;
    }
    @media (min-width: 769px) {
        margin-bottom: 88px;
        display: flex;
        justify-content: space-between;
        :last-child {
            margin: 0;
        }
    }
`

const TextBlock = styled.div`
    @media (min-width: 769px) {
        width: calc((100% - 40px) * 0.6);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`

const TextBlockTop = styled.div`
    padding: 24px 0;
    @media (min-width: 769px) {
        padding: 0;
    }
`

const TextBlockBottom = styled.div`
    display: flex;
    @media (min-width: 769px) {
        padding: 8px 0;
    }
`

const Title = styled.h4`
    color: #333333;
    font-size: 16px;
    font-weight: medium;
    @media (min-width: 769px) {
        font-size: 20px;
    }
`

const Date = styled.p`
    font-size: 14px;
    color: #777777;
    @media (min-width: 769px) {
        font-size: 16px;
    }
`

export default BlogItem
