import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Temp from './components/temperaturas/Temperaturas';
import Home from './components/home/Home';
import Medidas from './components/medidas/Medidas';


function App() {
  const [page, setPage] = useState('home')

  const rederPageAtual = () => {
    if (page === 'home'){
      return <Home/>
    } else if (page === 'temperatura'){
      return <Temp/>
    } else if(page ==='medidas'){
      return <Medidas/>
    }
  }
  return (
    <div className="App">
      <nav>
        <ul className='lista'>
          <li>
            <label>🏠</label>
            <button onClick={() => setPage('home')}>Home</button>
          </li>
          <li>
            <label>🌡️</label>
            <button onClick={() => setPage('temperatura')}>Temperaturas</button>
          </li>
          <li>
            <label>📏</label>
            <button onClick={() => setPage('medidas')}>Medidas</button>
          </li>
        </ul>
      </nav>
      {rederPageAtual()}
    </div>
  );
}

export default App;
