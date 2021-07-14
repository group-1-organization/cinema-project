import React from 'react';
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';
import { Link } from "react-router-dom";
import { useState } from "react";
import '../Styles/NavSearch.css'

const NavSearch = () => {

    const [searchQuery, setSearchQuery] = useState("");
    //const [searchUrl, setSearchUrl] = useState("");

    const handleFilter = (e) => {
        //setSearchUrl(`/search/${searchQuery}`);
        setSearchQuery(`/search/${e.target.value}`);
    }

    return (
        <>
            <Form inline>
                <FormControl type="text" id="movieSearch" onInput={handleFilter} placeholder="Search Term" onFocus={(disappear) => disappear.target.placeholder = ''}
                    onBlur={(reappear) => reappear.target.placeholder = 'Search Term'} />

                <Link to={searchQuery} aria-label="search-link" ><Button aria-label="search-btn" className="button-colour adj-search" type="button" id="movieSearchSubmit" >Search Term</Button></Link>
            </Form>
        </>
    );
}

export default NavSearch;

//onChange={(event) => setSearchQuery(event.target.value)}
//onClick={handleFilter}