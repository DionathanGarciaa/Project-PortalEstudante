import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Api from '../../services/Api';

import { Container, Principal, Title, Content, Cards, Cards2, Card1, Card2 } from './style';


const Detalhamento = ({ ...props }) => {




    const [contents, setContents] = useState([])
    const [notas, setNotas] = useState([])

    const tipoDeUsuario = sessionStorage.getItem('check')
    const history = useHistory();


    const { disciplina, data } = props.location.state




    useEffect(() => {
        Api.get(`/content/${disciplina._id}`, {
            headers: { Authorization: 'Bearer ' + sessionStorage.getItem('token') }
        }).then((res) => {
            setNotas(res.data.discipline.notas)
            setContents(res.data.discipline.contents)
        })
    }, [disciplina._id])





    return (
        <Container>

            <Principal>

                <Title>
                    <Content>
                        <h1>{disciplina.name} - Turma 345</h1>
                    </Content>
                </Title>
                <Cards>
                    <Card1 >
                        {contents.map((content) => {
                            return (
                                <p key={content._id} onClick={() => history.push({
                                    pathname: '/VisualizarContent',
                                    state: { content, disciplina, data }
                                })}>{content.title}</p>
                            )
                        })}
                    </Card1>
                    {tipoDeUsuario === "2" && <button onClick={() => history.push({
                        pathname: '/CadastroConteudo',
                        state: { disciplina, data }
                    })}>Pulicar Novo Conteúdo</button>}
                </Cards>

                <Cards2>
                    <Card2>
                        {notas.map((nota) => {

                            const id = nota.alunos.filter(id => id.idAlunos === data._id).map(id => id.valorNota)

                            return (
                                <p key={nota._id}>
                                    <span>{nota.nomeNota}</span>
                                    <span>Peso: {nota.pesoNota}</span>
                                    {tipoDeUsuario === "3" && <span > Nota {id} </span>}
                                </p>
                            )
                        })}


                    </Card2>
                    {tipoDeUsuario === "2" && <button onClick={() => history.push({
                        pathname: '/CadastroNota',
                        state: { disciplina, data }
                    })}>Pulicar Novo Conteúdo</button>}
                </Cards2>
            </Principal>

        </Container>
    )
}

export default Detalhamento;