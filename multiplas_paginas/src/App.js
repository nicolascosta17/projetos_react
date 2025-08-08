import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Temp from './components/temperaturas/Temperaturas';
import Home from './components/home/Home';
import Medidas from './components/medidas/Medidas';
import Numeric from './components/númericas/Numericas';


function App() {
  const [page, setPage] = useState('home')

  const rederPageAtual = () => {
    if (page === 'home') {
      return <Home />
    } else if (page === 'temperatura') {
      return <Temp />
    } else if (page === 'medidas') {
      return <Medidas />
    } else if (page === 'numerico') {
      return <Numeric />
    }
  }
  return (
    <div className="App" >
      <nav >
        <ul className='lista'>
          <li>
            <label>🏠</label>
            <button onClick={() => setPage('home')}>Home</button>
          </li>
          <li>
            <label>🌧️</label>
            <button onClick={() => setPage('temperatura')}>Temperaturas</button>
          </li>
          <li>
            <label>📏</label>
            <button onClick={() => setPage('medidas')}>Medidas</button>
          </li>
          <li>
            <label>👩🏻‍💻</label>
            <button onClick={() => setPage('numerico')}>Numérico</button>
          </li>
        </ul>
      </nav>
      {rederPageAtual()}
    </div>

  );
}

export default App;
