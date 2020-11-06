import React from 'react';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import { Container, Principal, Title, Content, Cards, Cards2, Card1, Card2} from './styled';


const Detalhamento = () => {

    const tipoDeUsuario="alno";

    return (
        <Container>

            <Header/>

        <Principal>

            <Title>
            <Content>

                <Link>Voltar</Link>
                
                <h1>Português - Turma 345</h1>

            </Content>
            </Title>


            <Cards>
                <Card1>
                    <p>Linguagem<br/>Estruturada</p>

                </Card1>
                   {tipoDeUsuario !=='aluno' && <button>Pulicar Novo Conteúdo</button>}
            </Cards>

            <Cards2>
                <Card2>
                    <p>Trabalho 1<br/>Peso 2.0<br/>{tipoDeUsuario =='aluno' && "Nota 10"}</p>
                    <p>Trabalho 1<br/>Peso 2.0<br/>{tipoDeUsuario =='aluno' && "Nota 10"}</p>
                    <p>Trabalho 1<br/>Peso 2.0<br/>{tipoDeUsuario =='aluno' && "Nota 10"}</p>
                    <p>Trabalho 1<br/>Peso 2.0<br/>{tipoDeUsuario =='aluno' && "Nota 10"}</p>
                </Card2>
                {tipoDeUsuario !=='aluno' && <button>Pulicar Nota</button>}
            </Cards2>
        </Principal>
           
        </Container>
    )
}

export default Detalhamento;