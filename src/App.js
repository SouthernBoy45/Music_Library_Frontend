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

  return (
    <div className='container-fluid'>
      <div>
        <MusicTable parentTable={song} />
      </div>
      
      <button onClick={() => getAllSongs()}>Get All Songs</button>
    </div>
  );
}

export default App;
