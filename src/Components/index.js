import React from 'react';
import User from '../../assets/user.svg';
import { Container } from './style';

const Header = () => {
  return (
    <Container>
        <h1>Bem-vindo, fulaninho</h1>
        <img src={User} alt="user"/>
    </Container>
  );
};

export default Header;