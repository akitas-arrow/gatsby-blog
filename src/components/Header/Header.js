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
    z-index: 99;
    display: flex;
    height: 80px;
    background-color: yellow;
    justify-content: space-between;
`

const Toggle = styled.div`
    display: flex;
    cursor: pointer;
    background-color: red;
    padding: 0 8px;
`

const Hamburger = styled.div`
    background-color: #111;
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
        background-color: #111;
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
`

const NavBox = styled.div`
    width: 100%;
    text-align: center;
    position: fixed;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease-in;
    top: 80px;
    right: ${props => (props.open? "-100%" : "0")};
`

export default Header
