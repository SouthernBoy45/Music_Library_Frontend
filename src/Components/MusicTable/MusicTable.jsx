import React from 'react';
import axios from 'axios';

const MusicTable = (props) => {

    async function handleDelete(badSong){
        console.log(badSong)
        try {
        const response = await axios.delete('https://localhost:7114/api/Songs');
          if(response.status === 201){
            return (response.data)
          }
          } catch (error) {
            console.log(error.response.data)
          }}
    
    return(
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
                {props.parentTable.map((song, index)=> {
                     return(
                        <tr key={index}>
                            <td>{index +1}</td> 
                            <td>{song.title}</td> 
                            <td>{song.artist}</td> 
                            <td>{song.album}</td> 
                            <td>{song.releaseDate.split('T')[0]}</td> 
                            <td>{song.genre}</td>
                            <td><button onClick = {() => handleDelete(MusicTable.index)}>Delete</button></td>
                         </tr>
                    )})
                }
            </tbody>
        </table>
    )
}

export default MusicTable;