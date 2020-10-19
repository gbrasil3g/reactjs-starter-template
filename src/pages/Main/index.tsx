import React from 'react';

import { Container } from './styles';

import Button from '../../components/Button/index' // -> Importando o componente button

import Alert from '../../extras/scripts/Alert'

const Main: React.FC = () => {
  Alert("Welcome to page!") // Utilizando a função Alert

  return (
    <Container>
      <h1>Main</h1>

      <Button content="Hello ReactJS Template"/> {/* Utilizando o componente Button */}
    </Container>
  );
};

export default Main;
