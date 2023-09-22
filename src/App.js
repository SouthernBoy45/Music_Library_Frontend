import React, { useState, useEffect } from "react";
import axios from "axios";
import MusicTable from "./Components/MusicTable/MusicTable";
import SearchBar from "./Components/SearchBar/SearchBar";
import AddSongForm from "./Components/AddSongForm/AddSongForm";
import SongRow from "./Components/SongRow/SongRow";

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs() {
    const response = await axios.get("https://localhost:7114/api/Songs");
    setSongs(response.data);
  }

  async function addNewSong(newSong) {
    console.log(newSong);
    try {
      const response = await axios.post(
        "https://localhost:7114/api/Songs",
        newSong
      );
      if (response.status === 201) {
        await getAllSongs();
      }
    } catch (error) {
      console.log(error.response.data);
    }
  }

  function createNewSearch(searchText) {
    let sanitizedText = searchText.toLowerCase();
    let filteredSongs = songs.filter((el) => {
      if (
        el.title.toLowerCase().includes(sanitizedText) ||
        el.artist.toLowerCase().includes(sanitizedText) ||
        el.album.toLowerCase().includes(sanitizedText) ||
        el.releaseDate.toLowerCase().includes(sanitizedText) ||
        el.genre.toLowerCase().includes(sanitizedText)
      )
        return true;
    });
    setSongs(filteredSongs);

    if (searchText === "") getAllSongs();
  }

  return (
    <div>
      <div>
        {songs && <MusicTable getAllSongs={getAllSongs} parentTable={songs} />}
      </div>
      <div>
        <SearchBar searchBarProperty={createNewSearch} />
      </div>
      <div>
        <AddSongForm addSongFormProp={addNewSong} />
      </div>
    </div>
  );
}

export default App;
