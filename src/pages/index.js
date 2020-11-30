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
              fluid {
                src
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
                fluid={edge.node.thumbnail.fluid}
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