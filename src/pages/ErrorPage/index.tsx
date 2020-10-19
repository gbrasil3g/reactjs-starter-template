import React from 'react';
import Button from '../../components/Button';

import { Container } from './styles';

const ErrorPage: React.FC = () => {
  return (
    <Container>
      <h1>ErrorPage</h1>
      <p>Page not found...</p>

      <Button content="Take me back"  /> 
    </Container>
  );
};

export default ErrorPage;
