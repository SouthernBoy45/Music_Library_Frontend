import React, { useState, useEffect } from 'react';
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

  function createNewSearch(search) {
    let results = songs.filter(function(userInput){
      if (userInput === songs.title || userInput === songs.artist ||
        userInput === songs.album || userInput === songs.releaseDate ||
        userInput === songs.genre)
        return results;
      })

    let tempSearch = [...songs, search];
    setSongs(tempSearch);
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
