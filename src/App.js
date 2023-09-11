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

  function createNewSearch(userInput) {
    let results = songs.filter(function(el){
      if (el.title.includes(userInput) ||
          el.artist.includes(userInput) ||
          el.album.includes(userInput) ||
          el.releaseDate.includes(userInput) ||
          el.genre.includes(userInput))
          return results;
      })

    let tempSearch = [...songs, userInput];
    setSongs(tempSearch);
    tempSearch.map();
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
