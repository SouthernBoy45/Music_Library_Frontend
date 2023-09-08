import React, { useState } from 'react';


const SearchBar = (props) => {
    
    const [userInput, setUserInput] = useState("");


    function handleSubmit(event) {
        event.preventDefault();
        let newSearch = {
           userInput: userInput
        };
        props.searchBarProperty(newSearch);
    };

    return ( 
        <form onSubmit={handleSubmit}>
            <placeholder>Search For A Song</placeholder>
            <input type='text' value = {userInput} onChange={(event) => setUserInput(event.target.value)}/>
            <button type='submit'> Search</button>
        </form>
     );
};
 
export default SearchBar;