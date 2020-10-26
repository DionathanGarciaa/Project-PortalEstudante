import React, { useState } from 'react';
import { Content, Container, Formulario, Title, Select, Button } from './style';
import { Link } from 'react-router-dom';
import Api from '../../services/Api';


const Usuario = () => {
    const [nome, setNome] = useState();
    const [sobrenome, setSobrenome] = useState();
    const [cpf, setCpf] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [tipoUsuario, setTipoUsuario] = useState();


    function handleSubmit(event) {
        event.preventDefault();
        createUser();
    }

    function createUser() {
        Api.post("/users", { firstname: nome, lastname: sobrenome, cpf, email, password: senha, usertype: tipoUsuario }).then(res => {
            if(res.data){
                alert("Cadastro Concluído");
            } 
        }, (err) => {
            alert("");
            })
    }


    return(

        <>
            <Container>

                <Formulario>
                    
                    {/* SAIR */}
                    <Content>
                        <Link to="/Home">X</Link>
                    </Content>

                    {/* TITULO */}
                    <Title>
                        <h1>Cadastro de Usuário</h1>
                    </Title>

                    {/* FORMULÁRIO */}
                    <form onSubmit={handleSubmit}>
                        <div className="inputNome">

                            {/* INPUT NOME */}
                            <input 
                                className="input1"
                                id="nome"
                                type="text"
                                placeholder="Nome"
                                value={nome}
                                required
                                onChange={(event) => setNome(event.target.value)}
                            />

                            {/* INPUT SOBRENOME */}
                            <input 
                                className="input2"
                                id="sobrenome"
                                type="text"
                                placeholder="Sobrenome"
                                value={sobrenome}
                                required
                                onChange={(event) => setSobrenome(event.target.value)}
                            />
                        </div>

                        {/* INPUT CPF */}
                        <input 
                            id="cpf"
                            type="text"
                            placeholder="CPF"
                            value={cpf}
                            required
                            onChange={(event) => setCpf(event.target.value)}
                        />

                        {/* INPUT EMAIL */}
                        <input 
                            id="email"
                            type="text"
                            placeholder="E-mail"
                            value={email}
                            required
                            onChange={(event) => setEmail(event.target.value)}
                        />

                        {/* INPUT SENHA */}
                        <input 
                            id="senha"
                            type="password"
                            placeholder="Senha"
                            value={senha}
                            required
                            onChange={(event) => setSenha(event.target.value)}
                        />

                        {/* INPUT TIPO DE USUARIO*/}
                        <Select>
                            <select 
                                id="disciplinas"
                                onChange={(event) => setTipoUsuario(event.target.value)}
                            >
                                <option value="1" selected>Administrador</option>   
                                <option value="2" selected>Professor</option>
                                <option value="3" selected>Aluno</option>
                                <option value=""  disabled selected>Tipo de Usuário</option>

                            </select>
                        </Select>

                        {/* BOTÃO */}
                        <Button>
                            <button>Salvar</button>
                        </Button>
                            
                    </form>
                    
                </Formulario>
                
            </Container>
        </>
    )
}

export default Usuario;