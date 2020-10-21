import React from 'react';
import User from '../../assets/user.svg';
import { Container } from './style';

const Header = () => {
  return (
    <Container>
        <h2>Bem-vindo, fulaninho</h2>
        <img src={User} alt="user"/>
    </Container>
  );
};

export default Header;