
const MusicTable = (props) => {

    function handleDelete(event){
        async function deleteSong(){
            const response = await axios.delete('https://localhost:7114/api/Songs')
        }
        event.preventDefault();
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
                            <button type='delete' onClick={handleDelete}>Delete</button>
                         </tr>
                    )})
                }
            </tbody>
        </table>
    )
}

export default MusicTable;