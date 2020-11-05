import React, { useState, useEffect } from 'react'
import Header from '../../components/Header';
import { useHistory } from 'react-router-dom';
import Api from '../../services/Api';
import { Container, Titulo, Disciplina, Card } from './style';


const Home = ({ ...props }) => {
    const [disciplinas, setDisciplinas] = useState([]);
    const history = useHistory();



    const check = sessionStorage.getItem('check')


    const data = props.location.state

    useEffect(() => {
        if (check === "2") {
            const data = props.location.state.user;
            Api.get(`/discipline/${data._id}/${data.usertype}`, {
                headers: { Authorization: 'Bearer ' + sessionStorage.getItem('token') }
            }).then((response) => {
                setDisciplinas(response.data.discipline)
            })
        } else {
            const data = props.location.state
            Api.get(`/discipline/${data._id}/${data.usertype}`, {
                headers: { Authorization: 'Bearer ' + sessionStorage.getItem('token') }
            }).then((response) => {
                setDisciplinas(response.data.userDiscipline[0].disciplines)
            })
        }


    }, [check, props.location.state, props.location.state.Api, props.location.state.user])


    return (

        <Container>

            {/* TITULO */}
            <Titulo>
                <h1>Disciplinas:</h1>
            </Titulo>

            {/* MENU */}
            <Disciplina>

                {disciplinas.map((disciplina) => {

                    return (
                        <Card key={disciplina._id} onClick={() => history.push({
                            pathname: '/DetalhamentoDisciplina',
                            state: { disciplina, data }
                        })}>
                            <span className="title" >{disciplina.name} </span>
                            <span > Turma 345 </span>
                        </Card>
                    )
                })}

            </Disciplina>

        </Container>
    )
}
export default Home;