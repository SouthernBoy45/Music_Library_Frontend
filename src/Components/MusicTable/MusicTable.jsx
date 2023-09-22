import React from "react";
import SongRow from "../SongRow/SongRow";

const MusicTable = ({ parentTable, getAllSongs }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th> </th>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Release Date</th>
          <th>Genre</th>
        </tr>
      </thead>
      <tbody>
        {parentTable.map((song, index) => (
          <SongRow
            getAllSongs={getAllSongs}
            song={song}
            index={index}
            key={song.id}
          />
        ))}
      </tbody>
    </table>
  );
};

export default MusicTable;
