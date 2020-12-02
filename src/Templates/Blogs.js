import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/Layout"
import ContentsWrapper from "../components/ContentsWrapper"
import BlogItem from "../components/BlogItem"
import PageNation from "../components/PageNation"

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
            <ContentsWrapper>
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
                    previousPagePath={pageContext.previousPagePath}
                    nextPagePath={pageContext.nextPagePath}
                />
            </ContentsWrapper>
        </Layout>
    )
}


export default blog
