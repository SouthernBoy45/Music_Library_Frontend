import React, { useState, useEffect } from "react";
import axios from "axios";
import MusicTable from "./Components/MusicTable/MusicTable";
import SearchBar from "./Components/SearchBar/SearchBar";
import AddSongForm from "./Components/AddSongForm/AddSongForm";
import "./App.css";


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
    <div style={{backgroundImage: `url(${"/MusicBackgroundImage.jpg"})`,
                }}>
      <div className="container-fluid">
        <div className="row">
          <h1 style={{ margin: "1em", color: "whitesmoke" }}>
            Your Music Library
          </h1>
          <div className="col-md-6">
            <div className="border-box">
              <SearchBar searchBarProperty={createNewSearch} />
            </div>
            <div className="border-box">
              {songs && (
                <MusicTable getAllSongs={getAllSongs} parentTable={songs} />
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="border-box">
              <AddSongForm addSongFormProp={addNewSong} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
