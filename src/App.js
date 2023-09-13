import React, { useState, useEffect, } from 'react';
import axios from 'axios';
import MusicTable from './Components/MusicTable/MusicTable';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);
  
  async function getAllSongs(){
    const response = await axios.get('https://localhost:7114/api/Songs');
    setSongs(response.data);
  }

  function createNewSearch(searchText) {
    let sanitizedText = searchText.toLowerCase();
    let filteredSongs = songs.filter((el) => {
      if (el.title.toLowerCase().includes(sanitizedText) || el.artist.toLowerCase().includes(sanitizedText) ||
          el.album.toLowerCase().includes(sanitizedText) || el.releaseDate.toLowerCase().includes(sanitizedText) ||
          el.genre.toLowerCase().includes(sanitizedText))
          return true;
      })
    setSongs(filteredSongs);
    }

  return (
    <div>
      <div>
        <MusicTable parentTable={songs} />
      </div>
      <div>
        <SearchBar searchBarProperty={createNewSearch}/>
      </div>
    </div>
  );
}

export default App;
