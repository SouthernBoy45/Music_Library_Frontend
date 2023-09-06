import React, { useState } from 'react';


const SearchBar = (props) => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [releaseDate, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');

    function handleSearch(event){
        event.preventDefault();
        setTitle(event.target);
        setArtist(event.target);
        setAlbum(event.target);
        setReleaseDate(event.target);
        setGenre(event.target);
    };

    return ( 
        <form onSubmit={handleSearch}>
            <label>Search For A Song</label>
            <input type='text' value = {title} onChange={(event) => handleSearch(event.target.value)}
            />
        </form>
     );
}
 
export default SearchBar;