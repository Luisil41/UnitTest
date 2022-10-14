import logo from "./logo.svg";
import "./App.css";
import MiComponenteConContexto from './hooks/Ejemplo3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MiComponenteConContexto />
      </header>
    </div>
  );
}

export default App;
