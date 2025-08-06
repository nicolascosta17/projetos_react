import logo from './logo.svg';
import './App.css';
import Botao_01 from './components/botao01/botao01';
import Botao_02 from './components/botao02/botao02';
import Botao_03 from './components/botao03/botao03';
import React from './components/botao04/botao04';

function App() {
  return (
    <div className="App">
      <Botao_01/><br></br><br></br>
      <Botao_02/><br></br><br></br>
      <Botao_03/><br></br><br></br>
      <React/>
    </div>
  );
}

export default App;
