import React from 'react'
import Header from '../../components/Header';
import { Exit, Container, Title, TitleContent, Clear, TextCtd } from './style';
import { Link } from 'react-router-dom';
import { BsBoxArrowInLeft } from 'react-icons/bs';




const VisualizarConteudo = ({ ...props }) => {

    const { content, data } = props.location.state

    return (

        <>

            {/* CABEÇALHO */}
            <Header />


            <Exit>
                <Link to={{
                    pathname: '/DetalhamentoDisciplina',
                    state: data
                }}>


                    <BsBoxArrowInLeft fontSize={30} color="#000" />
                </Link>
            </Exit>

            <Container>

                <Title>Português - Turma 345</Title>

                <Clear></Clear>

                <TitleContent>{content.title}</TitleContent>

                <Clear></Clear>
                <Clear></Clear>
                <Clear></Clear>

                <TextCtd>{content.description}</TextCtd>
            </Container>
        </>
    )
}

export default VisualizarConteudo;