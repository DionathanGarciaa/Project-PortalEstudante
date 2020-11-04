import React, { useState, useEffect } from 'react'
import Header from '../../components/Header';
import { Exit, Container, Title, TitleContent, Descricao, Clear, DescCont, Button, InputTitle } from './style';
import { Link } from 'react-router-dom';
import { BsBoxArrowInLeft } from 'react-icons/bs';
import Api from '../../services/Api';
import AlertSuccess from '../../components/ModalAlerts/SuccessAlert';
import AlertErro from '../../components/ModalAlerts/ErroAlert';
import { useHistory } from 'react-router-dom';


const Conteudo = () => {


    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const id = "5f983342a298573144a10260";


    function handleSubmit(event) {
        event.preventDefault();
        createCont();
    }


    function createCont(){
        Api.post(`/content/${id}`,{title,description}, { 
            headers: { Authorization: 'Bearer ' + sessionStorage.getItem('token')}}).then
             ((response) => {
                 console.log(response);
             })
    }


    return(

        <>

            
            <Exit>
                <Link to="/Home">
                    <BsBoxArrowInLeft fontSize={30} color="#000" />
                </Link>
            </Exit>
            
            <Container>

                <Title>Português - Turma 345</Title>

                <Clear></Clear>

                <TitleContent>Titulo : <input type="text" id="TitleCont" class="InputTitle" onChange={(event) => setTitle(event.target.value)}></input></TitleContent>

                <Clear></Clear>

                <Descricao>Descrição: </Descricao>

                <form onSubmit={handleSubmit} >
                <DescCont 
                            id="conteudo"
                            type="textarea"
                            placeholder="Descrição do conteudo"
                            onChange={(event) => setDescription(event.target.value)}
                        />

                        <Button>
                            <button>Salvar</button>
                        </Button>
                </form>
            </Container>
        </>
    )
}

export default Conteudo;