import React, { useState } from 'react';
import { Content, Container, Title, Select, Button } from './style';
import { Link } from 'react-router-dom';
import { Selects } from '../Matricula/style';



const Usuario = () => {
    const [nome, setNome] = useState();
    const [sobrenome, setSobrenome] = useState();
    const [telefone, setTelefone] = useState();
    const [email, setEmail] = useState();
    const [usuarios, setUsuarios] = useState([{tipo: "Aluno"}, {tipo: "Professor"}, {tipo: "Administrador" }]);
    const [tipoUsuario, setTipoUsuario] = useState();

    
    

    return(
<>
        <Content>
            <Link to="/Home">X</Link>
        </Content>

        <Title>
                <h1>Cadastro de Usuário</h1>
        </Title>

        <Container>



            <form>

            <input 
            className="input1"
            id="nome"
            type="text"
            placeholder="Nome"
            value={nome}
            required
            onChange={(event) => setNome(event.target.value)}
            />

            <input 
            className="input2"
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
            <Select>
            <select 
                id="disciplinas"
                value={tipoUsuario}
                onChange={(event) => setTipoUsuario(event.target.value)}

            >
                <option value="" disabled selected>Tipo de Usuário</option>
                {usuarios.map((usuario)=>(
                <option value={usuario.tipo}>{usuario.tipo}</option>
                ))}
                
            </select>
            </Select>
            
            </form>
        </Container>

                <Button>
                    <button>Salvar</button>
                </Button>
</>
    )
}

export default Usuario;
