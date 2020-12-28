import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from "../components/Layout"
import ContentsWrapper from "../components/ContentsWrapper"
import BlogItem from "../components/BlogItem"
import PageNation from "../components/PageNation"
import SEO from "../components/seo"

export const query = graphql`
query ($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(
        sort:{
            fields: createdDate,
            order: DESC
        }
        skip: $skip
        limit: $limit
    ){
        edges {
            node {
                title
                slug
                createdDate(formatString: "YYYY/MM/DD")
                thumbnail {
                    title
                    file {
                        url
                    }
                }
                tags {
                    name
                    slug
                }
            }
        }
    }
    }
`

function blog({ data, pageContext }) {
    return (
        <Layout>
            <SEO 
                title={`ブログ一覧 part-${pageContext.humanPageNumber}`}
                url={pageContext.pageNumber === 0 ? `/blog` : `/blog/page/${pageContext.humanPageNumber}`}
            />
            <ContentsWrapper>
                <Heading>
                    <Title>
                        BLOG
                    </Title>
                </Heading>
                {
                    data.allContentfulBlogPost.edges.map((edge, index) => {
                        return (
                            <BlogItem
                                key={index}
                                title={edge.node.title}
                                date={edge.node.createdDate}
                                tags={edge.node.tags}
                                url={edge.node.thumbnail.file.url}
                                alt={edge.node.thumbnail.title}
                                link={`blog/${edge.node.slug}`}
                            />
                        )
                    })
                }
                <PageNation
                    pageContext={pageContext}
                />
            </ContentsWrapper>
        </Layout>
    )
}

const Heading = styled.div`
    position: relative;
    height: 160px;
    @media (min-width: 769px) {
        height: 308px;
    }
`
const Title = styled.h3`
    font-family: "Tenor Sans";
    font-size: 24px;
    font-weight: normal;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (min-width: 769px) {
        font-size: 32px;
    }
`


export default blog
