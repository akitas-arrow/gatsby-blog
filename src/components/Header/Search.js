import React from 'react'
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Search() {
    return (
        <FormGroup>
            <FontField type="text" placeholder="Search"/>
            <SearchButton>
                <FontAwesomeIcon icon={faSearch} />
            </SearchButton>
        </FormGroup>
    )
}

const FormGroup = styled.form`
    /* background-color: blue; */
    display: flex;
`

const SearchButton = styled.button`
    border: none;
    background: transparent;
    outline: none;
    cursor: pointer;
`

const FontField = styled.input`
    font-family: "Tenor Sans";
    border: 0;
    border-bottom: 1px solid #51505d;
    background: transparent;
    &::placeholder {
        color: #51505d;
    }
    :focus {
        border-bottom: 2px solid #51505d;
        outline: none;
    }
`




export default Search
