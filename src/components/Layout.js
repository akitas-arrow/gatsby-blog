import React from 'react'
import Header from './Header'
import Footer from './Footer'
import "modern-css-reset"
import "fontsource-noto-sans-jp"
import "fontsource-tenor-sans"
import Style from './Layout.module.scss'

function Layout({ children }) {
    return (
        <div>
            <Header />
            <div>
            { children }
            </div>
            <Footer />
        </div>
    )
}

export default Layout
