import React, { useEffect, useState } from 'react';
import { Exit, Container, Formulario, Title } from './style';
import Api from '../../services/Api';
import { BsX } from "react-icons/bs";


const Usuario = ({ ...props }) => {

    const id = sessionStorage.getItem('user')


    const [user, setUser] = useState([]);






    useEffect(() => {
        Api.get(`/users/${id}`, {
            headers: { Authorization: 'Bearer ' + sessionStorage.getItem('token') }
        }).then((response) => {
            setUser(response.data.user)
        })
    }, [id])


    return (

        <>
            <Container>
                <Formulario>

                    {/* SAIR */}
                    <Exit onClick={() => props.showModal1(false)}>
                        <BsX fontSize={30} color="red" />
                    </Exit>

                    {/* TITULO */}
                    <Title>
                        <h1>Meus dados</h1>
                    </Title>

                    {/* FORMULÁRIO */}
                    {user.map((u) => {
                        console.log(u)
                        return (
                            <form key={u._id} >
                                <div className="inputNome">
                                    {/* INPUT NOME */}
                                    <span>Nome</span>
                                    <input className="input1" id="nome" type="text" value={u.firstname} />


                                    {/* INPUT SOBRENOME */}
                                    <span>Sobrenome</span>
                                    <input className="input2" id="sobrenome" type="text" value={u.lastname} />
                                </div>

                                {/* INPUT CPF */}
                                <span>CPF</span>
                                <input id="cpf" type="text" value={u.cpf} />

                                {/* INPUT EMAIL */}
                                <span>Email</span>
                                <input id="email" type="text" value={u.email} />
                            </form>
                        )
                    })}

                </Formulario>

            </Container>
        </>
    )
}

export default Usuario;