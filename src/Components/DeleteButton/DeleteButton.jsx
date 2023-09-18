import React, {useState} from 'react';

const DeleteButton = (props) => {

    const [badSong, setBadSong] = useState("");

    function handleDelete(event){
        event.preventDefault();
        props.deleteButtonProp(badSong);
    }

    return ( 
        <button type='delete' value={badSong} onClick={handleDelete((event) => setBadSong())}>Delete</button>
     )
}
 
export default DeleteButton;