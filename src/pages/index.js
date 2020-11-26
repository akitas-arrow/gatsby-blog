import React from "react"
import Layout from "../components/Layout"
import StyledTopImage from "../components/TopImage"
import ContentsWrapper from "../components/ContentsWrapper"
import StyledThumbnail from "../components/Thumbnail"
import styled from 'styled-components'

export default function Home() {
  return (
  <Layout>
    <StyledTopImage />
    <ContentsWrapper>
        <Blog>
          <StyledThumbnail />
          <BlogInfo>
            <div>
              <h4>ブログのタイトル。</h4>
              <p>2020/11/26</p>
            </div>
            <div>
              たぐ
            </div>
          </BlogInfo>
        </Blog>
    </ContentsWrapper>
  </Layout>
  )
}

const Blog = styled.div`
  
`

const BlogInfo = styled.div`

`
