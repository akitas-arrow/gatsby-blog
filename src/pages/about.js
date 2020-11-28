import React from 'react'
import Layout from '../components/Layout'
import ContentsWrapper from '../components/ContentsWrapper'
import styled from 'styled-components'

function About() {
    return (
        <Layout>
            <ContentsWrapper>
                <Heading>
                    <TitleBlock>about</TitleBlock>
                    <ImageBlock>gazou</ImageBlock>
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
    padding-top : 80px;
    @media (min-width: 769px) {
        display: flex;
        justify-content: space-between;
    }
`

const TitleBlock = styled.div`
    background-color: pink;
    width: 100%;
    @media (min-width: 769px) {
        width: calc((100% - 40px) / 2);
    }
`

const ImageBlock = styled.div`
    background-color: white;
    width: 100%;
    @media (min-width: 769px) {
        width: calc((100% - 40px) / 2);
    }
`

const TextBlock = styled.div`

`

const NameBlock = styled.div`
    display: flex;
`

const JapaneseName = styled.p`

`

const AlphabetName = styled.p`
    font-family: "Tenor Sans";
`

const Profile = styled.div`

`
export default About
