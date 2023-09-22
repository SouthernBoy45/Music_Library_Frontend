import React, { useState } from "react";
import "./AddSongForm.css";

const AddSongForm = (props) => {
  const [songTitle, setSongTitle] = useState("");
  const [songArtist, setSongArtist] = useState("");
  const [songAlbum, setSongAlbum] = useState("");
  const [songReleaseDate, setSongReleaseDate] = useState("");
  const [songGenre, setSongGenre] = useState("");

  function handleNewSong(event) {
    event.preventDefault();
    let newEntry = {
      title: songTitle,
      artist: songArtist,
      album: songAlbum,
      releaseDate: songReleaseDate,
      genre: songGenre,
    };
    props
      .addSongFormProp(newEntry)
      .then(
        setSongTitle(""),
        setSongArtist(""),
        setSongAlbum(""),
        setSongReleaseDate(""),
        setSongGenre("")
      );
  }

  return (
    <form onSubmit={handleNewSong} className="form-grid">
      <div className="form-group">
        <label>Title</label>
        <input
          className="form-control"
          type="text"
          value={songTitle}
          onChange={(event) => setSongTitle(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Artist</label>
        <input
          className="form-control"
          type="text"
          value={songArtist}
          onChange={(event) => setSongArtist(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Album</label>
        <input
          className="form-control"
          type="text"
          value={songAlbum}
          onChange={(event) => setSongAlbum(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Release Date</label>
        <input
          className="form-control"
          type="date"
          value={songReleaseDate}
          onChange={(event) => setSongReleaseDate(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Genre</label>
        <input
          className="form-control"
          type="text"
          value={songGenre}
          onChange={(event) => setSongGenre(event.target.value)}
        />
      </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ "margin-top": "1em" }}
        >
          Add
        </button>
    </form>
  );
};

export default AddSongForm;
