import React from 'react'
import styled from "styled-components"

const Tag = ({ children }) => {
    return (
        <TagButton>
            { children }
        </TagButton>
    )
}

const TagButton = styled.div`
    background-color: #51505D;
    padding: 0 8px;
    color: #FFFFFF;
    font-size: 14px;
    display: inline-block;
    border-radius: 4px;
`

export default Tag
