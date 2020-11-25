import React from 'react'
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function Search() {
    return (
        <FormGroup>
            <Container>
                <FontField type="text" placeholder="Search"/>
                <SearchButton>
                    <FontAwesomeIcon icon={faSearch} color='#51505d'/>
                </SearchButton>
            </Container>
        </FormGroup>
    )
}

const FormGroup = styled.form`
    /* background-color: blue; */
    display: flex;
    height: 80px;
`

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    line-height: 80px;
`

const FontField = styled.input`
    font-family: "Tenor Sans";
    border: 0;
    border-bottom: 1px solid #51505d;
    background: transparent;
    height: 40px;
    &::placeholder {
        color: #51505d;
    }
    :focus {
        border-bottom: 2px solid #51505d;
        outline: none;
    }
`
const SearchButton = styled.button`
    border: none;
    background: transparent;
    outline: none;
    cursor: pointer;
`



export default Search
