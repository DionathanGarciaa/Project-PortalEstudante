import React, { useState } from 'react';
import { Container, Title, Formulario, Box1, Box2, Box3, Botao, Imagem } from './style';
import Img from '../../Assets/img.svg';

const RedefinirSenha = () => {
    const[email, setEmail] = useState('');
    const[cpf, setCpf] = useState('');
    const[senha, setSenha] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (

        <Container>

            {/* TITULO */}
            <Title>
                <h1>Esqueci Senha</h1>
            </Title>

            {/* FORMULARIO */}
            <Formulario>
                <form onSubmit={handleSubmit}>

                    {/* INPUT EMAIL */}
                    <Box1>
                        <label htmlFor="Email">E-mail</label>
                        <input 
                            id="Email"
                            Type="email"
                            Value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </Box1>

                    {/* INPUT CPF */}
                    <Box2>
                        <label htmlFor="cpf">CPF</label>
                        <input 
                            id="cpf"
                            Type="text"
                            Value={cpf}
                            onChange={(event) => setCpf(event.target.value)}
                            required
                        />
                    </Box2>

                    {/* INPUT NOVA SENHA */}
                    <Box3>
                        <label htmlFor="Senha">Nova Senha</label>
                    
                        <input 
                            id="Senha"
                            Type="password"
                            Value={senha}
                            onChange={(event) => setSenha(event.target.value)}
                            minLength='6'
                            required
                        />
                    </Box3>

                    {/* BOTAO */}
                    <Botao>
                        <button>
                            <strong>Redefinir Senha</strong>
                        </button>
                    </Botao>
                    
                </form>
            </Formulario>

            {/* IMAGEM */}
            <Imagem>
               <img src={Img} alt='ilustração de alguém desenhando no quadro'></img>
            </Imagem>


        </Container>
    )
}

export default RedefinirSenha;