import React, { useState } from 'react'
import styled from "styled-components"
import HeaderTitle from './HeaderTitle'
import NavLinks from './NavLinks'
import Search from './Search'

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Wrapper>
            <Content>
                <HeaderTitle />
                    <Toggle
                        isOpen={isOpen}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <Hamburger open /> : <Hamburger />}
                    </Toggle>
                <NavLinks />
                {isOpen ? (
                    <NavBox>
                        <NavLinks />
                        <Search />
                    </NavBox>
                ) : (
                    <NavBox open>
                        <NavLinks />
                        <Search />
                    </NavBox>
                )}
            </Content>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    height: 80px;
    position: fixed;
    z-index: 99;
    margin: 0 auto;
    /* background-color: red; */
`
const Content = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
`
const Toggle = styled.div`

`

const Hamburger = styled.div`

`

const NavBox = styled.div`

`

export default Header
