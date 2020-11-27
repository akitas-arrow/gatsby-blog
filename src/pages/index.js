import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Layout from "../components/Layout"
import StyledTopImage from "../components/TopImage"
import ContentsWrapper from "../components/ContentsWrapper"
import BlogItem from "../components/BlogItem"

const Home = () => {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
              tag
              thumbnail {
                name
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
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </ContentsWrapper>
    </Layout>
  )
}

export default Home