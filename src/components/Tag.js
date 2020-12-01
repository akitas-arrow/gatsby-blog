import React from 'react'
import styled from "styled-components"
import { Link } from 'gatsby'

const Tag = ({ name, link }) => {
    return (
        <TagButton to={`/${link}`}>
            { name }
        </TagButton>
    )
}

const TagButton = styled(Link)`
    text-decoration: none;
    background-color: #51505D;
    padding: 0 8px;
    color: #FFFFFF;
    font-size: 14px;
    display: inline-block;
    border-radius: 4px;
    margin-right: 16px;
    :hover {
        opacity: 0.7;
    }
`

export default Tag
