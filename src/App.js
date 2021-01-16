import React from 'react';
import HeaderPage from './components/HeaderPage/HeaderPage';
import FormPage from './components/FormPage/FormPage';
import FormCadastro from './formularioCadastro.json';
import Css from './App.css';

function App() {
  return (
    <div className="App">
      <HeaderPage />
      <h1>Olá React</h1>
      <FormPage info={FormCadastro}/>
    </div>
  );
}

export default App;
