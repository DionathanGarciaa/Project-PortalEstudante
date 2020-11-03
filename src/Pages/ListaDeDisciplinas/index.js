import React,{ useState, useEffect } from 'react'
import Header from '../../components/Header';
import Api from '../../services/Api';
import { Link } from 'react-router-dom';
import { Container, Titulo, Disciplina, Card } from './style';


const Home = () => {
    const [lists, setLists] = useState([]);

    const id = "5f970bbfd483070bb03b4111";

    useEffect(() => {
        Api.get(`/discipline/${id}/3`, {
            headers: { Authorization: 'Bearer ' + sessionStorage.getItem('token') }
        }).then((response) => {
            setLists(response.data.userDiscipline[0].disciplines)
        })
    }, [])

    return (

        <Container>

            {/* CABEÇALHO */}
            <Header/>

            {/* TITULO */}
            <Titulo>
                <h1>Disciplinas:</h1>
            </Titulo>

            {/* MENU */}
            <Disciplina>
                
                {lists.map((list) => {
                    return(
                        <Card>
                            <Link to="/">
                                <h4 key={list}>{list.name}</h4>
                                <span key={list}> Turma: 435 </span>
                            </Link>
                        </Card>
                    )
                })
                }

            </Disciplina>
        
        </Container>
    )
}
export default Home;