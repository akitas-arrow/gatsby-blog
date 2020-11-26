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
    height: 80px;
`

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px 24px;
    @media (min-width: 769px) {
        padding: 8px;
    }
`

const FontField = styled.input`
    background: transparent;
    flex: 1;
    font-family: "Tenor Sans";
    font-size: 20px;
    border: 0;
    border-bottom: 1px solid #51505d;
    padding: 16px;
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
