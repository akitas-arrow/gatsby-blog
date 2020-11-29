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
            fields {
              slug
            }
            frontmatter {
              title
              date
              tag
              thumbnail {
                childImageSharp {
                  fluid(maxWidth: 530) {
                    ...GatsbyImageSharpFluid
                  }
                }
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
          data.allMarkdownRemark.edges.map((edge, index) => {
            return (
              <BlogItem
                key={index}
                title={edge.node.frontmatter.title}
                date={edge.node.frontmatter.date}
                tag={edge.node.frontmatter.tag}
                fluid={edge.node.frontmatter.thumbnail.childImageSharp.fluid}
                link={`blog/${edge.node.fields.slug}`}
              />
            )
          })
        }
      </ContentsWrapper>
    </Layout>
  )
}

export default Home