import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    
    const [userInput, setUserInput] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        props.searchBarProperty(userInput);
    };

    return ( 
        <form className='search-grid' onSubmit={handleSubmit}>
            <label>Search For A Song</label>
            <input type='text'className='form-control' value = {userInput} onChange={(event) => setUserInput(event.target.value)}/>
            <button type='submit' className="btn btn-primary" style={{'margin-top': '1em'}}>Search</button>
        </form>
     );
};
 
export default SearchBar;