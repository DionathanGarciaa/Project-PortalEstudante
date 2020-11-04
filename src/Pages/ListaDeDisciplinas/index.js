import React, { useState, useEffect } from 'react'
import Header from '../../components/Header';
import { useHistory } from 'react-router-dom';
import Api from '../../services/Api';
import { Container, Titulo, Disciplina, Card } from './style';


const Home = ({ ...props }) => {
    const [lists, setLists] = useState([]);
    const history = useHistory();



    const check = sessionStorage.getItem('check')



    useEffect(() => {
        if (check === "2") {
            const data = props.location.state.user;
            Api.get(`/discipline/${data._id}/${data.usertype}`, {
                headers: { Authorization: 'Bearer ' + sessionStorage.getItem('token') }
            }).then((response) => {
                setLists(response.data.discipline)
            })
        } else {
            const data = props.location.state
            Api.get(`/discipline/${data._id}/${data.usertype}`, {
                headers: { Authorization: 'Bearer ' + sessionStorage.getItem('token') }
            }).then((response) => {
                setLists(response.data.userDiscipline[0].disciplines)
            })
        }


    }, [check, props.location.state, props.location.state.Api, props.location.state.user])


    return (

        <Container>

            {/* CABEÇALHO */}
            <Header />

            {/* TITULO */}
            <Titulo>
                <h1>Disciplinas:</h1>
            </Titulo>

            {/* MENU */}
            <Disciplina>

                {lists.map((list) => {
                    return (
                        <Card key={list._id} onClick={() => history.push({
                            pathname: '/DetalhamentoDisciplina',
                            state: list
                        })}>
                            <span className="title" >{list.name} </span>
                            <span > Turma 345 </span>
                        </Card>
                    )
                })}

            </Disciplina>

        </Container>
    )
}
export default Home;