import React, { useState, useEffect } from 'react'
import Header from '../../components/Header';
import { Exit, Container, Selects, Button } from './style';
import { Link } from 'react-router-dom';
import { BsBoxArrowInLeft } from 'react-icons/bs';
import Api from '../../services/Api';

const Matricula = () => {
    const [matricula, setMatricula] = useState();
    const [disciplinas, setDisciplinas] = useState([]);
    const [disciplinesSelected, setDisciplinesSelected]= useState([
       '', '', '', '', '', ''
    ])


    useEffect(() => {
        Api.get('/content').then((response) => {
            setDisciplinas(response.data.discipline)
        })
    }, [])
 

    function handleSubmit(event) {
        event.preventDefault()
        cadastrarDisciplinas()
    }

    function cadastrarDisciplinas () {
        // let materia = [disciplina1, disciplina2, disciplina3, disciplina4, disciplina5, disciplina6];


        Api.post(`/registration/${matricula}`, {disciplines: disciplinesSelected}).then((response) => {
            console.log(response.data)
            alert("ok")
    } )
}



    return (
        <>
            {/* CABEÇALHO */}
            <Header/>

            {/* SAIR */}
            <Exit>
                <Link to="/Home">
                    <BsBoxArrowInLeft fontSize={30} color="#000" />
                </Link>
            </Exit>
        
            {/* CONTAINER */}
            <Container>
           
                {/* FORMULÁRIO */}
                <form onSubmit={handleSubmit}>

                    {/* INPUT N° MATRICULA ALUNO */}
                    <input 
                        id="number"
                        type="text"
                        placeholder="Nº matricula aluno"
                        value={matricula}
                        required
                        onChange={(event) => setMatricula(event.target.value)}
                    />
                    <br/>
                    
                    {/* SELECT DISCIPLINA */}
                    <Selects>
                        <select 
                            id="disciplinas"
                            value={disciplinesSelected[0]}
                            onChange={(event) =>{
                                let disciplines = [...disciplinesSelected];
                                disciplines[0]=event.target.value;
                                setDisciplinesSelected(disciplines)}}
                                
                        >
                            <option value="" disabled selected>Disciplina</option>
                            {disciplinas.map((disciplina)=>(
                                    <option value={disciplina._id}>{disciplina.name}</option>
                            ))}
                        </select>

                        <select 
                            id="disciplinas"
                            value={disciplinesSelected[1]}
                            onChange={(event) =>{
                                let disciplines = [...disciplinesSelected];
                                disciplines[1]=event.target.value;
                                setDisciplinesSelected(disciplines)}}
                        >
                            <option value="" disabled selected>Disciplina</option>
                            {disciplinas.map((disciplina)=>(
                                <option value={disciplina._id}>{disciplina.name}</option>
                            ))}
                        </select>

                        <select 
                            id="disciplinas"
                            value={disciplinesSelected[2]}
                            onChange={(event) =>{
                                let disciplines = [...disciplinesSelected];
                                disciplines[2]=event.target.value;
                                setDisciplinesSelected(disciplines)}}

                        >
                            <option value="" disabled selected>Disciplina</option>
                            {disciplinas.map((disciplina)=>(
                                <option value={disciplina._id}>{disciplina.name}</option>
                            ))}
                        </select>

                        <select 
                            id="disciplinas"
                            value={disciplinesSelected[3]}
                            onChange={(event) =>{
                                let disciplines = [...disciplinesSelected];
                                disciplines[3]=event.target.value;
                                setDisciplinesSelected(disciplines)}}

                        >
                            <option value="" disabled selected>Disciplina</option>
                                {disciplinas.map((disciplina)=>(
                                <option value={disciplina._id}>{disciplina.name}</option>
                            ))}
                        </select>

                        <select 
                            id="disciplinas"
                            value={disciplinesSelected[4]}
                            onChange={(event) =>{
                                let disciplines = [...disciplinesSelected];
                                disciplines[4]=event.target.value;
                                setDisciplinesSelected(disciplines)}}

                        >
                            <option value="" disabled selected>Disciplina</option>
                            {disciplinas.map((disciplina)=>(
                                <option value={disciplina._id}>{disciplina.name}</option>
                            ))}
                        </select>

                        <select 
                            id="disciplinas"
                            value={disciplinesSelected[5]}
                            onChange={(event) =>{
                                let disciplines = [...disciplinesSelected];
                                disciplines[5]=event.target.value;
                                setDisciplinesSelected(disciplines)}}

                        >
                            <option value="" disabled selected>Disciplina</option>
                            {disciplinas.map((disciplina)=>(
                                <option value={disciplina._id}>{disciplina.name}</option>
                            ))}
                        </select>
                    </Selects>
            <Button>
                <button type="submit" >Salvar</button>
            </Button>
                </form>
            </Container>

            {/* BOTÃO */}
        </>
    )
}

export default Matricula;