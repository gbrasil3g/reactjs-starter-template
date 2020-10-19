import styled from 'styled-components'; // -> Importando styled do styled-components

export const Container = styled.div` 
  // -> Estilos do Container dentro das crases

  button {
    background-color: deepskyblue;
    padding: 20px;
    color: #fff;

    transition: all 400ms ease-in-out;
    border-radius: 8px;

    margin-top: 15px;

    a {
      text-decoration: none;
    }

    &:hover {
      transform: translateY(10px) scale(1.05)
    }
  }
`;
