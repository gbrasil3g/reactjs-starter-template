import React from 'react' // -> Importando o react

import MainPage from '../pages/Main/index' // -> Importando a página principal
import ErrorPage from '../pages/ErrorPage' // -> Importando a página de erro 404

import { Switch, Route, Redirect } from 'react-router-dom' // -> Importando algumas coisas do pacote react-router-dom

const Routes: React.FC = () => (
  // -> Definido as rotas

  <Switch>
    <Route path="/" exact component={MainPage}/> {/* Quando o usuário acessar a rota "/"(principal) renderizar a MainPage (o exact só é necessário nessa rota!) */}
    <Route path="/404" component={ErrorPage}/>
    <Redirect to="/404" />
  </Switch>
)

export default Routes