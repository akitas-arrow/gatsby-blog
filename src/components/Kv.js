import React from 'react'
import Image from './image'
import Style from './Kv.module.scss'

function Kv() {
    return (
        <div>
            <Image filename="top.jpg" alt="メイン画像" className={Style.image}/>
        </div>
    )
}

export default Kv
