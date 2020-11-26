import React, { useState } from 'react'
import styled from "styled-components"
import HeaderTitle from './HeaderTitle'
import NavLinks from './NavLinks'
import Search from './Search'

function Header() {
    const [ isOpen, setIsOpen ] = useState(false) 
    return (
        <Wrapper>
            <HeaderTitle />
            <Toggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                {
                    isOpen? <Hamburger open /> : <Hamburger />
                }
            </Toggle>
            {
                isOpen?(
                    <NavBox>
                        <NavLinks/>
                        <Search />
                    </NavBox>
                ) : (
                    <NavBox open>
                        <NavLinks/>
                        <Search />
                    </NavBox>
                )
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    padding: 0 16px;
    position: fixed;
    z-index: 2;
    display: flex;
    height: 80px;
    justify-content: space-between;
`

const Toggle = styled.div`
    display: flex;
    cursor: pointer;
    z-index: 3;
    padding: 0 8px;
    @media (min-width: 769px) {
        display: none;
    }
`

const Hamburger = styled.div`
    background-color: #51505d;
    width: 30px;
    height: 2px;
    transition: all .3s linear;
    align-self: center;
    position: relative;
    transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

    ::before,
    ::after {
        width: 30px;
        height: 2px;
        background-color: #51505d;
        content: "";
        position: absolute;
        transition: all 0.3s linear;
    }

    ::before {
        transform: ${props =>
        props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
        top: -10px;
    }

    ::after {
        opacity: ${props => (props.open ? "0" : "1")};
        transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
        top: 10px;
    }
    
    @media(min-width: 769px) {
        display: none;
    }
`

const NavBox = styled.div`
        display: flex;
    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
        text-align: center;
        position: fixed;
        background-color: #e9eff4;
        flex-direction: column;
        transition: all 0.3s ease-in;
        top: 0;
        padding-top: 80px;
        right: ${props => (props.open? "-100%" : "0")};
    }
`

export default Header
