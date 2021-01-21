import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ContentsWrapper from '../components/ContentsWrapper'
import styled from 'styled-components'
import SEO from '../components/seo'
import Img from "gatsby-image"

export const data = graphql`
    query {
        file(relativePath: {eq: "about.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

function About({ data }) {

    return (
        <Layout>
            <SEO
                title="COCOLOについて"
                article={true}
            />
            <ContentsWrapper>
                <Heading>
                    <TitleBlock>
                            <Title>
                                ABOUT
                            </Title>
                        </TitleBlock>
                    <ImageBlock>
                        <Img fluid={data.file.childImageSharp.fluid} alt="笠井心"/>
                    </ImageBlock>
                </Heading>
                <TextBlock>
                    <NameBlock>
                        <JapaneseName>笠井&emsp;心&emsp;&frasl;</JapaneseName>
                        <AlphabetName>&emsp;Cocolo&emsp;Kasai</AlphabetName>
                    </NameBlock>
                    <Profile>
                        略歴<br/>
                        1995年山梨県生まれ。南山大学心理人間学科卒業。2018年4月に大学在学中からアルバイトで働いていた株式会社アイランド・ブレインに就職。2019年6月にフリーランスとして独立。文筆業や各種業務委託を行いつつプログラミングを仲間と独学で学ぶ。2020年6月に株式会社Teclanを設立。現在、一人社長として勉強・開発・仲間探しに奮闘中。
                    </Profile>
                </TextBlock>
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
    /* background-color: pink; */
    width: 100%;
    height: 160px;
    margin-bottom: 24px;
    @media (min-width: 769px) {
        width: calc((100% - 40px) / 2);
        height: auto;
        padding-top: 35%;
        margin: 0;
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

const ImageBlock = styled.div`
    background-color: white;
    width: 100%;
    /* padding-top: 75%; */
    @media (min-width: 769px) {
        width: calc((100% - 40px) / 2);
        /* padding-top: 35%; */
    }
`

const TextBlock = styled.div`
    /* background-color:orange; */
    width: 100%;
    @media (min-width: 769px) {
        margin: 0 auto;
        max-width: 800px;
    }
`

const NameBlock = styled.div`
    display: flex;
    font-size: 18px;
`

const JapaneseName = styled.p`

`

const AlphabetName = styled.p`
    font-family: "Tenor Sans";
`

const Profile = styled.div`
    margin-top: 24px;
    font-size: 16px;
`
export default About
