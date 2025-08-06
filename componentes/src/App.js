import logo from './logo.svg';
import './App.css';
import Primeiro_Botao from './components/botao/botao'; // Importa função Primeiro_Botao
import Texto_01 from './components/texto_01/texto'; // Importa função Texto_01
import Lista_Frutas from './components/lista/lista';
import Botao_02 from './components/botao2/botao2';

function App() {
  return (
    <div className="App">
      <h1>Bem-vindo ao meu aplicativo</h1>
      <Primeiro_Botao/>
      <Texto_01/>
      <Lista_Frutas/>
      <Botao_02/>
    </div>
  );
}

export default App;
