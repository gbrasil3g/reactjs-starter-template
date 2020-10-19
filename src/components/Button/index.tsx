import React from 'react'; // -> Importando o react
import { Link } from 'react-router-dom';

import { Container } from './styles'; // -> Importando os estilos de cada coisa

interface ButtonProps { // Definindo o tipo da mensagem do botão
  content: string; // -> O contéudo vai ser uma string obrigatória
  
}

const Button: React.FC<ButtonProps> = ({ content }) => { // -> Puxando a propriedade content da interface de tipos "ButtonProps"
  return (
    <Container>
      <button><Link to="/">{content}</Link></button> {/* Colocando o texto no botao */}
      <button><Link to="/404">Go to 404</Link></button> 
    </Container>
  );
};

export default Button;
