
const MusicTable = (props) => {
    return(
        <table className="table">
            <thead>
                <tr>
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
                            <td>{song.Title}</td>
                            <td>{song.Artist}</td>
                            <td>{song.Album}</td>
                            <td>{song.ReleaseDate}</td>
                            <td>{song.Genre}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default MusicTable;