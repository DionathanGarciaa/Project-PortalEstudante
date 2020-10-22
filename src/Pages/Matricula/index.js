import React, { useState } from 'react'
import Header from '../../components/header';
import { Content, Container, Selects, Button } from './style';
import { Link } from 'react-router-dom';


const Matricula = () => {
    const [matricula, setMatricula] = useState();
    const [disciplinas, setDisciplinas] = useState([{nome: "Português"}]);
    const [disciplina1, setDisciplina1] = useState();
    const [disciplina2, setDisciplina2] = useState();
    const [disciplina3, setDisciplina3] = useState();
    const [disciplina4, setDisciplina4] = useState();
    const [disciplina5, setDisciplina5] = useState();
    const [disciplina6, setDisciplina6] = useState();

    
    return (
        <>
        <Header/>

        <Content>   
        <Link to="/Home">Voltar</Link>
        </Content>
        
        <Container>
           

            <form>
            <input 
            id="number"
            type="text"
            placeholder="Nº matricula aluno"
            value={matricula}
            required
            onChange={(event) => setMatricula(event.target.value)}
            />
            <br/>
            <Selects>
                <select 
                    id="disciplinas"
                    value={disciplina1}
                    onChange={(event) => setDisciplina1(event.target.value)}
                    
                >
                    <option value="" disabled selected>Disciplina</option>
                    {disciplinas.map((disciplina)=>(
                    <option value={disciplina.nome}>{disciplina.nome}</option>
                    ))}
                
                </select>
                <select 
                    id="disciplinas"
                    value={disciplina2}
                    onChange={(event) => setDisciplina2(event.target.value)}

                >
                    <option value="" disabled selected>Disciplina</option>
                    {disciplinas.map((disciplina)=>(
                    <option value={disciplina.nome}>{disciplina.nome}</option>
                    ))}
                
                </select>
                <select 
                    id="disciplinas"
                    value={disciplina3}
                    onChange={(event) => setDisciplina3(event.target.value)}

                >
                    <option value="" disabled selected>Disciplina</option>
                    {disciplinas.map((disciplina)=>(
                    <option value={disciplina.nome}>{disciplina.nome}</option>
                    ))}
                
                </select>
                <select 
                    id="disciplinas"
                    value={disciplina4}
                    onChange={(event) => setDisciplina4(event.target.value)}

                >
                    <option value="" disabled selected>Disciplina</option>
                    {disciplinas.map((disciplina)=>(
                    <option value={disciplina.nome}>{disciplina.nome}</option>
                    ))}
                
                </select>
                <select 
                    id="disciplinas"
                    value={disciplina5}
                    onChange={(event) => setDisciplina5(event.target.value)}

                >
                    <option value="" disabled selected>Disciplina</option>
                    {disciplinas.map((disciplina)=>(
                    <option value={disciplina.nome}>{disciplina.nome}</option>
                    ))}
                
                </select>
                <select 
                    id="disciplinas"
                    value={disciplina6}
                    onChange={(event) => setDisciplina6(event.target.value)}

                >
                    <option value="" disabled selected>Disciplina</option>
                    {disciplinas.map((disciplina)=>(
                    <option value={disciplina.nome}>{disciplina.nome}</option>
                    ))}
                
                </select>
            </Selects>
            </form>
        </Container>
        <Button>
            <button>Salvar</button>
        </Button>
        </>

    )
}

export default Matricula;
