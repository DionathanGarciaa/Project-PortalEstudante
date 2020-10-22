import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, ContainerExt, ContainerInt, Content, Title, Formulario, Button } from './style';

const Disciplina = () => {
    const [nome, setNome] = useState();
    const [matricula, setMatricula] = useState();
    const [alunos, setAlunos] = useState();

    return (
        
        <Container>

            <ContainerExt>

                <Content>
                    <Link to="/Home">X</Link>
                </Content>
        
                <ContainerInt>
                    <Title>
                            <h1>Cadastro de Disciplina</h1>
                    </Title>

                    <Formulario>
                        <form>

                            <input 
                            className="input1"
                                id="nome"
                                type="text"
                                placeholder="Nome"
                                value={nome}
                                onChange={(event) => setNome(event.target.value)}
                                required
                            />

                            <input 
                                className="input2"
                                id="Matricula"
                                type="text"
                                placeholder="Matricula Professor Responsável"
                                value={matricula}
                                required
                                onChange={(event) => setMatricula(event.target.value)}
                            />

                            <input 
                                className="input3"
                                id="Aluno"
                                type="text"
                                placeholder="Quantidade de Alunos"
                                value={alunos}
                                required
                                onChange={(event) => setAlunos(event.target.value)}
                            />

                        </form>
                    </Formulario>

                    <Button>
                        <button>Salvar</button>
                    </Button>
                </ContainerInt>

            </ContainerExt>

        </Container>
    )
}

export default Disciplina;