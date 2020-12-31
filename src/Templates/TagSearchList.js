import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ContentsWrapper from '../components/ContentsWrapper'
import BlogItem from '../components/BlogItem'
import styled from 'styled-components'
import SEO from '../components/seo'

export const query = graphql`
    query ($slug: String!){
        allContentfulBlogPost(
            filter: {
                tags: {
                    elemMatch: {
                        slug:{eq: $slug}
                    }
                }
            },
            sort: {
                fields:createdDate,
                order:DESC
            }
        ){
            edges {
                node {
                    title
                    createdDate(formatString: "YYYY/MM/DD")
                    slug
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
        contentfulTag (slug:{eq: $ slug}) {
            name
        }
    }
`

function TagSearchList ({ data }) {
    return (
        <Layout>
            <SEO 
                title={data.contentfulTag.name}
            />
            <ContentsWrapper>
                <Heading>
                    <Title>
                        {`#${data.contentfulTag.name}の記事一覧`}
                    </Title>
                </Heading>
                {
                    data.allContentfulBlogPost.edges.map((edge, index) => {
                        return (
                            <BlogItem
                                key={index}
                                title={edge.node.title}
                                date={edge.node.createdDate}
                                url={edge.node.thumbnail.file.url}
                                tags={edge.node.tags}
                                link={`blog/${edge.node.slug}`}
                                alt={edge.node.thumbnail.title}
                            />
                        )
                    })
                }
            </ContentsWrapper>
        </Layout>
    )
}

const Heading = styled.div`
    width: 100%;
    height: 208px;
    /* position: relative; */
    @media (min-width: 769px) {
        height: 600px;
    }
`

const Title = styled.div`
    /* position: absolute; */
    /* top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
    line-height: 208px;
    font-size: 20px;
    @media (min-width: 769px) {
        line-height: 600px;
        font-size:32px;
    }
`

export default TagSearchList
