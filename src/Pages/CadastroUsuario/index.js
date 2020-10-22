import React, { useState } from 'react';
import { Container, Title } from './style';
import { Link } from 'react-router-dom';



const Usuario = () => {
    const [nome, setNome] = useState();
    const [sobrenome, setSobrenome] = useState();
    const [telefone, setTelefone] = useState();
    const [email, setEmail] = useState();
    const [usuario, setUsuario] = useState([{tipo1: "Aluno", tipo2: "Professor", tipo3: "Administrador" }]);


    return(

        <Container>
            <Link>X</Link>

            <Title>
                <h1>Cadastro de Usuário</h1>
            </Title>

            <form>

                <input 
                    id="nome"
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    required
                    onChange={(event) => setNome(event.target.value)}
                />

            <input 
            id="nome"
            type="text"
            placeholder="Sobrenome"
            value={sobrenome}
            required
            onChange={(event) => setSobrenome(event.target.value)}
            />

            <input 
            id="nome"
            type="text"
            placeholder="Telefone"
            value={telefone}
            required
            onChange={(event) => setTelefone(event.target.value)}
            />

            
            <input 
            id="nome"
            type="text"
            placeholder="E-mail"
            value={email}
            required
            onChange={(event) => setEmail(event.target.value)}
            />

            <select 
                id="disciplinas"
                value={usuario}
                onChange={(event) => setUsuario(event.target.value)}

            >
                <option value="" disabled selected>Tipo de Usuário</option>
                {usuario.map((usuario)=>(
                <option value={usuario.tipo}>{usuario.tipo}</option>
                ))}
                
            </select>
            
            </form>


        </Container>

    )
}

export default Usuario;
