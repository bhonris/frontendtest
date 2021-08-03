import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios'

const SERVER_ADDRESS = 'http://localhost:3003'

function App() {
  const [fruit, setFruit] = useState('');

  async function getFruit(){
    const receivedFruit = await axios({
      method: 'get',
      url: `${SERVER_ADDRESS}/fruit/${fruit}`,
    })
    console.log(receivedFruit)
    alert(receivedFruit);
  }

  return (
    <div className="App">
       <label for="fname">Get Fruit!</label> <br/>
       <input value={fruit} onChange={e => setFruit(e.target.value)} />
      <button onClick={getFruit}> Submit </button>
    </div>
  );
}

export default App;
