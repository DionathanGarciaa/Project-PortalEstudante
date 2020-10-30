import React from 'react';
import { Container, User } from './style';
import { FaUserCircle } from "react-icons/fa";



const Header = () => {

  return (

    <Container>
      <h2>Bem-vindo, {sessionStorage.getItem("firstname")}</h2>

      <User>
        <ul>
          <li data-dropdown>
            <FaUserCircle fontSize={50} color="#fff" />
            <ul className="dropdown-menu animeDown">
              <li> <a href="/">Meus Dados</a> </li>
              <li> <a href="/Login">Sair</a></li>
            </ul>
          </li>
        </ul>


      </User>

    </Container>

  );
};

export default Header;