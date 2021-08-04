
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios'

const SERVER_ADDRESS = 'http://localhost:3003'

function App() {
  const [fruit, setFruit] = useState('');
  // 4. use hook to establish stateful variable for maxPrice


  async function getFruit(){
    const receivedFruit = await axios({
      method: 'get',
      url: `${SERVER_ADDRESS}/fruit/${fruit}`,
    })
    alert(`Fruit: ${receivedFruit.name}, Price: ${receivedFruit.price}`)
  }

  // 5. complete this function (very similar to getFruit)
  // Using url: `${SERVER_ADDRESS}/price/${maxPrice}`
  async function getListFromMaxPrice(){
    return false
  }

  return (
    <div className="App">
       <label for="fname">Get Fruit!</label> <br/>
       <input value={fruit} onChange={e => setFruit(e.target.value)} />
      <button onClick={getFruit}> Submit </button>
      {/* 3. Create elements to input max price */}
    </div>
  );
}

export default App;
