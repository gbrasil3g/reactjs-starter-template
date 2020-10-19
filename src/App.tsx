import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom' // -> Importando o BrowserRouter como Router do pacote react-router-dom

import Routes from './routes/routes' // -> Importando as rotas

import Global from './styles/global' // -> Importando os estilos globais

function App() {
  return (
    <Router>
      <Routes />

      <Global />
    </Router>
  );
}

export default App;
