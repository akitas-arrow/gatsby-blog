import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import ContentsWrapper from '../components/ContentsWrapper'
import { renderRichText } from "gatsby-source-contentful/rich-text"

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}){
            title
            createdDate(formatString: "YYYY/MM/DD")
            thumbnail {
                fluid {
                    src
                }
            }
            body {
                raw
            }
        }
    }
`

function BlogDetail(props) {
    return (
        <Layout>
            <ContentsWrapper>
                <Heading>
                    <TitleBlock>
                        <Container>
                            <Title>{props.data.contentfulBlogPost.title}</Title>
                            <Date>{props.data.contentfulBlogPost.createdDate}</Date>
                        </Container>
                    </TitleBlock>
                    <ImageBlock>
                    </ImageBlock>
                </Heading>
                <TextBlock>
                    {renderRichText(props.data.contentfulBlogPost.body, {})}
                </TextBlock>
            </ContentsWrapper>
        </Layout>
    )
}

const Heading = styled.div`
    width: 100%;
    padding: 24px 0;
    @media (min-width: 769px) {
        display: flex;
        justify-content: space-between;
        padding : 80px 0;
    }
`

const TitleBlock = styled.div`
    position: relative;
    /* background-color: pink; */
    width: 100%;
    height: 160px;
    margin-bottom: 24px;
    @media (min-width: 769px) {
        width: calc((100% - 40px) / 2);
        height: auto;
        padding-top: 35%;
        margin: 0;
    }
`
const Container = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
`
const Title = styled.h4`
    font-size: 20px;
    font-weight: normal;
    @media (min-width: 769px) {
        font-size: 32px;
    }
`

const Date = styled.p`
    font-size: 16px;
`

const ImageBlock = styled.div`
    background-color: white;
    width: 100%;
    padding-top: 75%;
    @media (min-width: 769px) {
        width: calc((100% - 40px) / 2);
        padding-top: 35%;
    }
`

const TextBlock = styled.div`
    /* background-color:orange; */
    height: auto;
`


export default BlogDetail