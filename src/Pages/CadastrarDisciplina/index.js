import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Title, Formulario, Button } from './style';


const Disciplina = () => {
    const [nome, setNome] = useState();
    const [matricula, setMatricula] = useState();
    const [alunos, setAlunos] = useState();

    return (
        
        <>
            <Container>

                <Formulario>

                    {/* SAIR  */}
                    <Content>
                        <Link to="/Home">X</Link>
                    </Content>

                    {/* TITULO */}
                    <Title>
                        <h1>Cadastro de Disciplina</h1>
                    </Title>

                    {/* FORMULÁRIO */}
                    <form>

                        {/* INPUT NOME */}
                        <input 
                            id="nome"
                            type="text"
                            placeholder="Nome"
                            value={nome}
                            onChange={(event) => setNome(event.target.value)}
                            required
                        />
                        
                        {/* INPUT MATRICULA PROFESSOR RESPONSAVEL */}
                        <input 
                            id="matricula"
                            type="text"
                            placeholder="Matrícula Professor Responsável"
                            value={matricula}
                            onChange={(event) => setMatricula(event.target.value)}
                            required
                        />

                        {/* INPUT QUANTIDADE DE ALUNOS */}
                        <input 
                            id="alunos"
                            type="text"
                            placeholder="Quantidade de Alunos"
                            value={alunos}
                            onChange={(event) => setAlunos(event.target.value)}
                            required
                        />

                        {/* BOTÃO */}
                        <Button>
                            <button>Salvar</button>
                        </Button>
                            
                    </form>
                </Formulario>
            </Container>
        </>
    )
}

export default Disciplina;