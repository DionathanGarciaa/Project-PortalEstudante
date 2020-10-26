import React, { useState } from 'react';
import { Container, Exit, Title, Formulario, Button } from './style';
import { BsX } from "react-icons/bs";
import Api from '../../services/Api';


const Disciplina = (props) => {
    const [nome, setNome] = useState();
    const [matricula, setMatricula] = useState();
    const [alunos, setAlunos] = useState();

    function handleSubmit(event) {
        event.preventDefault();
        createDiscipline();
    }

    function createDiscipline() {
        Api.post("/discipline", { name: nome, idTeacher: matricula, numberStudents: alunos }).then(res => {
            if(res.data){
                alert("Cadastro concluído")
            }
        }, (err) => {
            alert("Não foi possível cadastrar essa disciplina")
        })
    }

    return (
        
        <Container>

            <Formulario>

                {/* SAIR  */}
                <Exit onClick={() => props.showModal2(false)}>
                    <BsX fontSize={30} color="red"/>
                </Exit>

                {/* TITULO */}
                <Title>
                    <h1>Cadastro de Disciplina</h1>
                </Title>

                {/* FORMULÁRIO */}
                <form onSubmit={handleSubmit}>

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
    
    )
}

export default Disciplina;