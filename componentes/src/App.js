import logo from './logo.svg';
import './App.css';
import Primeiro_Botao from './components/botao/botao'; // Importa função Primeiro_Botao
import Texto_01 from './components/texto_01/texto'; // Importa função Texto_01

function App() {
  return (
    <div className="App">
      <h1>Bem-vindo ao meu aplicativo</h1>
      <Primeiro_Botao/>
      <Texto_01/>
    </div>
  );
}

export default App;
