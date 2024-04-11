import logo from './logo.svg';
import './App.css';
import Titulo from './components/Titulo/Titulo';

function App() {
  const titulos=[
    'gano boca',
    'hoy hay examenes'
  ]
  return (
    <>
    {titulos.map(t => <Titulo texto={titulos[t]}/>)}
    </>
  );
}

export default App;
