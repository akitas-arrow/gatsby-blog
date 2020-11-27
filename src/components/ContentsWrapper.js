import React from 'react'
import styled from "styled-components"

function ContentsWrapper({ children }) {
    return (
        <Wrapper>
            <Container>
                { children }
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    background-color: #e9eff4;
    height: auto;
    padding: 80px 24px;
    @media (min-width: 769px) {
        padding: 88px 90px;
    }
`

const Container = styled.div`
/* background-color: pink; */
    width: 100%;
    @media (min-width: 769px) {
        margin: 0 auto;
        max-width: 1100px;
    }
`

export default ContentsWrapper
