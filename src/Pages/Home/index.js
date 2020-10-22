import React from 'react'
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import { Content, Card } from './style';

const Home = () => {
    return (
        <Content>
            <Header/>
            <h1>Escolha uma das opções abaixo:</h1>

        <Card>
            <Link to="/CadastroUsuario" className="p1">Cadastrar novo usuário</Link>
            <Link to="/Matricula" className="p2">Matricular aluno</Link>
            <Link to="/CadastrarDisciplina" className="p3">Cadastrar nova disciplina</Link>
        </Card>
        </Content>
    )
}
export default Home;