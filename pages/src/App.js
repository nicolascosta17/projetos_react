import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home from './components/home/Home'
import Contatos from './components/contatos/Contatos'
import Sobre from './components/sobre/Sobre'

function App() {
  // Estado para rastrear a página atual
  const [page, setPage] = useState('home');

  // Função para renderizar a página com base no estado
  const renderPageAtual = () =>{
    if (page === 'home'){
      return <Home/>
    }
    else if (page === 'sobre'){
      return <Sobre/>
    }
    else if (page === 'contatos'){
      return <Contatos/>
    }
  }
  return (
    <div className="App">
      {/* Menu de Navegação */} 
      <nav>
        <ul>
          <li>
            <button onClick={() => setPage('home')}>Home</button>
          </li>
          <li>
            <button onClick={() => setPage('sobre')}>Sobre</button>
          </li>
          <li>
            <button onClick={() => setPage('contatos')}>Contatos</button>
          </li>
        </ul>
      </nav>

      { /* Renderizar a página com base na seleção */}
      {renderPageAtual()}
    </div>
  );
}

export default App;
