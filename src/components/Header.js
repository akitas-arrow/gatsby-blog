import React from 'react'
import styled from "styled-components"

function Header() {
    return (
        <HeaderWrapper>
            <HeaderTitle>My Blog</HeaderTitle>
            <HeaderNavigation>ABOUT</HeaderNavigation>
            <Search type="text" placeholder="Search"/>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    position: fixed;
    font-family: "Tenor Sans";
    z-index: 99;
    padding: 0 32px;
`

const HeaderTitle = styled.div`
    font-size: 32px;
    flex: 1;
    line-height: 80px;
`
const HeaderNavigation = styled.div`
    font-size: 22px;
    line-height: 80px;
`
const Search = styled.input`
    margin-left: 32px;
    height: 32px;
    margin-top: 24px;
`

export default Header
