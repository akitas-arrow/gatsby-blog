import React from "react"
import Layout from "../components/Layout"
import StyledTopImage from "../components/TopImage"
import ContentsWrapper from "../components/ContentsWrapper"
import BlogItem from "../components/BlogItem"

export default function Home() {
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