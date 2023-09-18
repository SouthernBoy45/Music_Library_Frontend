import React from 'react';
import axios from 'axios';
import DeleteButton from '../DeleteButton/DeleteButton';

const MusicTable = (props) => {

    async function deleteSong(){
        const response = await axios.delete('https://localhost:7114/api/Songs', {method: 'DELETE'});
        return(response.data);
      }

    
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
                            <DeleteButton deleteButtonProp = {deleteSong}/>
                         </tr>
                    )})
                }
            </tbody>
        </table>
    )
}

export default MusicTable;