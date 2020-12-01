import React from 'react'
import { Link } from 'gatsby'
import Thumbnail from "./Thumbnail"
import styled from 'styled-components'
import Tag from "./Tag"

function BlogItem({ title, date, url, tag, link, alt}) {
    return (
        <Container>
            {/* <Thumbnail fluid={fluid}/> */}
            <ImageContainer>
                {/* <Thumbnail fluid={fluid}/> */}
                <img 
                    src={`${url}?fm=webp&fit=fill&w=768&h=576`}
                />
            </ImageContainer>
            <TextBlock>
                <TextBlockTop as={Link} to={`/${link}`}>
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
    margin-bottom: 80px;
    :last-child {
        margin: 0;
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

const ImageContainer = styled.div`
    width: 100%;
    @media (min-width: 769px) {
        width: calc((100% - 40px) * 0.4);
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
    display: block;
    text-decoration: none;
    padding: 24px 0;
    @media (min-width: 769px) {
        padding: 0;
    }
    :hover {
        opacity: 0.7;
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
