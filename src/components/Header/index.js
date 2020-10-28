import React from 'react';
import { Container, User } from './style';
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Header = () => {

  return (

    <Container>
        <h2>Bem-vindo, fulaninho</h2>

        <User>

          <div>
            <FaUserCircle fontSize={70} color="#fff"/>
          </div>
          
            <ul>
              <li>Meus Dados</li>
              <li>
                <Link to="/Login">Sair</Link>
              </li>
            </ul>
        
        </User>
        
    </Container>

  );
};

export default Header;