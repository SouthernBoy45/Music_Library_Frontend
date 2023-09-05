import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  useEffect(() => {
    getAllSongs();
  }, []);


  async function getAllSongs(){
    const response = await axios.get('https://localhost:7114/api/Songs')
    console.log(response.data);
  }

  return (
    <div>
      
    </div>
  );
}

export default App;
