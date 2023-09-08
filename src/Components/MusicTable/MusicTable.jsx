
const MusicTable = (props) => {
    
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
                            <td>{song.releaseDate}</td>
                            <td>{song.genre}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default MusicTable;