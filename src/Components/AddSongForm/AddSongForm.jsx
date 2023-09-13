import React, { useState } from 'react';

const AddSongForm = (props) => {

    const [songTitle, setSongTitle] = useState("");
    const [songArtist, setSongArtist] = useState("");
    const [songAlbum, setSongAlbum] = useState("");
    const [songReleaseDate, setSongReleaseDate] = useState("");
    const [songGenre, setSongGenre] = useState("");
    
    function handleNewSong(event) {
        event.preventDefault()
        let newEntry = {
            songTitle: songTitle,
            songArtist: songArtist,
            songAlbum: songAlbum,
            songReleaseDate: songReleaseDate,
            songGenre: songGenre
        }
        props.addSongFormProp(newEntry)
    }

    return ( 
    
    <form onSumbit= {handleNewSong}>
        <label>Title</label>
        <input type='text' value={songTitle} onChange={(event)=> setSongTitle(event.target.value)}/>
        <label>Artist</label>
        <input type='text' value={songArtist} onChange={(event)=> setSongArtist(event.target.value)}/>
        <label>Album</label>
        <input type='text' value ={songAlbum} onChange={(event)=> setSongAlbum(event.target.value)}/>
        <label>Release Date</label>
        <input type='date' value={songReleaseDate} onChange={(event) => setSongReleaseDate(event.target.value)}/>
        <label>Genre</label>
        <input type='text' value={songGenre} onChange={(event) => setSongGenre(event.target.value)}/>
        <button type='submit'>Add</button>
    </form>
    
    );
}
 
export default AddSongForm;