import React from 'react'
import Tag from '../Tag'
import styled from "styled-components"

function Footer() {
    return (
        <FooterWrapper>
            <FooterContainer>
                <FooterSection>
                    <Title>
                        TAGS
                    </Title>
                    <Tag>タグの名前1</Tag>
                </FooterSection>
                <FooterSection>
                    <Title>
                        CONTACT
                    </Title>
                    <p>お仕事のご相談はこちらのアドレスへお問い合わせ下さい。</p>
                    <p>hogehogehoge@hoge.com</p>
                </FooterSection>
            </FooterContainer>
        </FooterWrapper>
    )
}
const FooterWrapper = styled.footer`
    background-color: #CED4BE;
    width: 100%;
    padding: 80px 0;
`
const FooterContainer = styled.div`
    background-color: #CED4BE;
    max-width: 1100px;
    display: flex;
    margin: 0 auto;
    `

const FooterSection = styled.div`
    flex: 1;
    &:first-child {
        padding-right: 40px;
    }
`

const Title = styled.h3`
    font-size: 22px;
    font-family: "Tenor Sans";
    font-weight: normal;
`
export default Footer
