import React from 'react'
import Header from './Header'
import Footer from './Footer'
import "modern-css-reset"
import "fontsource-noto-sans-jp"
import "fontsource-tenor-sans"
import { createGlobalStyle } from "styled-components"

function Layout({ children }) {
    return (
        <>
            <GlobalStyle />
            <Header />
            <div>
            { children }
            </div>
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
