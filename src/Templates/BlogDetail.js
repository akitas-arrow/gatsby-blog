import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import ContentsWrapper from '../components/ContentsWrapper'
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}){
            title
            createdDate(formatString: "YYYY/MM/DD")
            thumbnail {
                title
                file {
                    url
                }
            }
            body {
                json
            }
        }
    }
`

function BlogDetail({ data }) {
    const options = {
        renderText: text => {
            return text.split('\n').reduce((children, textSegment, index) => {
                return [...children, index > 0 && <br key={index} />, textSegment];
            }, []);
        },
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => (
                <img
                    // src={`${node.data.target.fields.file["en-US"].url}?fm=webp&fit=fill&w=1100&h=825`}
                    src={`${node.data.target.fields.file["en-US"].url}?fm=webp&fit=fill&w=1100`}
                    alt={node.data.target.fields.title["en-US"]}
                />
            )
        },
    };

    return (
        <Layout>
            <ContentsWrapper>
                <Heading>
                    <TitleBlock>
                        <Container>
                            <Title>{data.contentfulBlogPost.title}</Title>
                            <Date>{data.contentfulBlogPost.createdDate}</Date>
                        </Container>
                    </TitleBlock>
                    <ImageBlock>
                        <img 
                            src={`${data.contentfulBlogPost.thumbnail.file.url}?fm=webp&fit=fill&w=1100&h=825`}
                            alt={data.contentfulBlogPost.thumbnail.title}
                        />
                    </ImageBlock>
                </Heading>
                <TextBlock>
                    {documentToReactComponents(data.contentfulBlogPost.body.json, options)}
                </TextBlock>
                <LinkButtonContainer>
                    <LinkButton to={"/blog"}>
                        一覧に戻る
                    </LinkButton>
                </LinkButtonContainer>
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
    width: 100%;
    height: 160px;
    margin-bottom: 24px;
    @media (min-width: 769px) {
        width: calc((100% - 40px) / 2);
        height: auto;
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
    color: #777777;
    font-size: 16px;
    padding-top: 16px;
    @media (min-width: 769px) {
        padding-top: 24px;
    }
`

const ImageBlock = styled.div`
    background-color: white;
    width: 100%;
    @media (min-width: 769px) {
        width: calc((100% - 40px) / 2);
    }
`

const TextBlock = styled.div`
    width: 100%;
    @media (min-width: 769px) {
        margin: 0 auto;
        max-width: 800px;
    }
`
const LinkButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 24px;
    @media (min-width: 769px) {
        padding-top: 80px;
    }
`

const LinkButton = styled(Link)`
    text-decoration: none;
    color: #51505d;
`

export default BlogDetail
