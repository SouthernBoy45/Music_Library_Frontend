import React from "react";
import axios from "axios";
const SongRow = ({song, index}) => {

//   async function handleDelete() {
//     try{
//       const response = await axios.delete(`https://localhost:7114/api/Songs/${song.id}`);
    
//     if(response.status === 200){
//         return(response.data)
//     }}
//     catch(error){
//         console.log(error.response.data)
//     }}

   function deleteSong(song, index){
    song.songRowProp(song, index)
    index.songRowProp(song, index)
   }

    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{song.title}</td>
        <td>{song.artist}</td>
        <td>{song.album}</td>
        <td>{song.releaseDate.split("T")[0]}</td>
        <td>{song.genre}</td>
        <td><button onClick={deleteSong}>Delete</button></td>
      </tr>
    );
  };
export default SongRow;
