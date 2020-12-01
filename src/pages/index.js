import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/Layout"
import StyledTopImage from "../components/TopImage"
import ContentsWrapper from "../components/ContentsWrapper"
import BlogItem from "../components/BlogItem"

const Home = () => {

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort:{
        fields: createdDate,
        order: DESC
      } ){
        edges {
          node {
            title
            slug
            createdDate(formatString: "YYYY/MM/DD")
            tag
            thumbnail {
              title
              file {
                url
              }
            }
          }
        }
      }
    }
  `)
  console.log(data);
  return (
    <Layout>
      <StyledTopImage />
      <ContentsWrapper>
        {
          data.allContentfulBlogPost.edges.map((edge, index) => {
            return (
              <BlogItem
                key={index}
                title={edge.node.title}
                date={edge.node.createdDate}
                tag={edge.node.tag}
                url={edge.node.thumbnail.file.url}
                alt={edge.node.thumbnail.title}
                link={`blog/${edge.node.slug}`}
              />
            )
          })
        }
      </ContentsWrapper>
    </Layout>
  )
}

export default Home