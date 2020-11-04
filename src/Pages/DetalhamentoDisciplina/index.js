import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Api from '../../services/Api';

import { Container, Principal, Title, Content, Cards, Cards2, Card1, Card2 } from './style';


const Detalhamento = ({ ...props }) => {


    const [contents, setContents] = useState([])
    const [notas, setNotas] = useState([])

    const tipoDeUsuario = sessionStorage.getItem('check')
    const history = useHistory();


    const data = props.location.state

    useEffect(() => {
        Api.get(`/content/${data._id}`, {
            headers: { Authorization: 'Bearer ' + sessionStorage.getItem('token') }
        }).then((res) => {
            console.log(res)
            setNotas(res.data.discipline.notas)
            setContents(res.data.discipline.contents)
        })
    }, [data._id])





    return (
        <Container>

            <Header />
            <Principal>

                <Title>
                    <Content>
                        <h1>{data.name} - Turma 345</h1>
                    </Content>
                </Title>
                <Cards>
                    <Card1 >
                        {contents.map((content) => {
                            return (
                                <p key={content._id} onClick={() => history.push({
                                    pathname: '/VisualizarContent',
                                    state: { content, data }
                                })}>{content.title}</p>
                            )
                        })}
                    </Card1>
                    {tipoDeUsuario === "2" && <button onClick={() => history.push({
                        pathname: '/CadastroConteudo',
                        state: data
                    })}>Pulicar Novo Conteúdo</button>}
                </Cards>

                <Cards2>
                    <Card2>
                        {notas.map((nota) => {
                            return (
                                <p key={nota._id}>
                                    <span>{nota.nomeNota}</span>
                                    <span>Peso: {nota.pesoNota}</span>

                                    {nota.alunos.map((aluno) => {
                                        console.log(aluno)

                                        return (
                                            tipoDeUsuario === "3" && <span key={aluno._id}> Nota {aluno.valorNota} </span>
                                        )
                                    })}
                                </p>
                            )
                        })}


                    </Card2>
                    {tipoDeUsuario === "2" && <button onClick={() => history.push({
                        pathname: '/CadastroConteudo',
                        state: data
                    })}>Pulicar Novo Conteúdo</button>}
                </Cards2>
            </Principal>

        </Container>
    )
}

export default Detalhamento;