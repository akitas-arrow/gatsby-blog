import React from 'react'
import Style from './Header.module.scss'

function Header() {
    return (
        <div className={Style.wrapper}>
            <div className={Style.title}>My Blog</div>
            <div className={Style.about}>ABOUT</div>
            <input type="text" placeholder="Search" className={Style.search}/>
        </div>
    )
}

export default Header
