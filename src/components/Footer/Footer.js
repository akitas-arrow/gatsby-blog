import React from 'react'
import { graphql, useStaticQuery} from 'gatsby'
import Tag from '../Tag'
import styled from "styled-components"

function Footer() {
    const data = useStaticQuery(graphql`
        query {
            allContentfulTag {
                edges {
                    node {
                        name
                        slug
                    }
                }
            }
        }
    `)

    return (
        <Wrapper>
            <Container>
                <FooterSection>
                    <Title>
                        TAGS
                    </Title>
                    {data.allContentfulTag.edges && data.allContentfulTag.edges.map((edge, index) => {
                        return (
                            <Tag
                                key={index}
                                name={edge.node.name}
                                link={`tags/${edge.node.slug}`}
                            />
                        )
                    }) }
                </FooterSection>
                <FooterSection>
                    <Title>
                        CONTACT
                    </Title>
                    <Text>お仕事のご相談はこちらのアドレスへお問い合わせ下さい。</Text>
                    <Text>kasaisfamily@gmail.com</Text>
                </FooterSection>
            </Container>
        </Wrapper>
    )
}
const Wrapper = styled.footer`
    background-color: #CED4BE;
    height: auto;
    padding: 80px 24px;
    @media (min-width: 769px) {
        padding: 80px 90px;
    }
`
const Container = styled.div`
    width: 100%;
    @media (min-width: 769px) {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 1100px;
    }
`

const FooterSection = styled.div`
    color: #333333;
    width: 100%;
    :first-child {
        margin-bottom: 80px;
    }
    @media (min-width: 769px) {
        width: calc((100% - 40px) / 2);
        :first-child {
            margin-bottom: 0;
        }
    }
`

const Title = styled.h3`
    color: #51505d;
    font-size: 20px;
    font-weight: normal;
    font-family: "Tenor Sans";
    margin-bottom: 16px;
    @media (min-width: 769px) {
        font-size: 24px;
    }
`

const Text = styled.p`
    font-size: 16px;
`
export default Footer
