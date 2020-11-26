import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import "modern-css-reset"
import "fontsource-noto-sans-jp"
import "fontsource-tenor-sans"
import { createGlobalStyle } from "styled-components"

function Layout({ children }) {
    return (
        <>
            <GlobalStyle />
            <Header />
            { children }
            <Footer />
        </>
    )
}

const GlobalStyle = createGlobalStyle`
    body {
        font-family: "Noto Sans JP";;
    }
`

export default Layout
