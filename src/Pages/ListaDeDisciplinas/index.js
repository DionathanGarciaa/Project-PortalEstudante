import React,{ useState, useEffect } from 'react'
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import Api from '../../services/Api';
import { Container, Titulo, Disciplina, Card } from './style';


const Home = () => {
    const [lists, setLists] = useState([]);

    // const id = "5f970bbfd483070bb03b4111";
    console.log(lists);

    useEffect(() => {
        Api.get(`/discipline/5f970bbfd483070bb03b4111/3`, {
            headers: { Authorization: 'Bearer ' + sessionStorage.getItem('token') }
        }).then((response) => {
            setLists(response.data.disciplines)
            
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
            {/* <Disciplina>
                
            {lists.map((list) => {
                return(
                  <Card>
                    <span> Nome: {list.firstname} </span>
                  </Card>
              )
              })}

            </Disciplina> */}
        
        </Container>
    )
}
export default Home;