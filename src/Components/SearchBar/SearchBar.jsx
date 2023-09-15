import React, { useState } from 'react';

const SearchBar = (props) => {
    
    const [userInput, setUserInput] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        props.searchBarProperty(userInput);
    };

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Search For A Song</label>
            <input type='text' value = {userInput} onChange={(event) => setUserInput(event.target.value)}/>
            <button type='submit'>Search</button>
        </form>
     );
};
 
export default SearchBar;