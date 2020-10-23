import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Title, Formulario, Box1, Box2, Senha, Botao, Imagem } from './style';
import Img from '../../assets/img.svg';


const Login = () => {
    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (

        <Container>

            {/* TITULO */}
            <Title>
                <h1>Portal do administrador</h1>
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

                    {/* INPUT SENHA */}
                    <Box2>
                        <label htmlFor="Senha">Senha</label>
                        <input 
                            id="Senha"
                            Type="password"
                            Value={senha}
                            onChange={(event) => setSenha(event.target.value)}
                            minLength='6'
                            required
                        />
                    </Box2>

                    {/* LINK PARA REDEFINIR SENHA */}
                    <Senha>
                        <Link to="/Redefinir">
                            <strong>Esqueci senha</strong>
                        </Link>
                    </Senha>

                    {/* BOTAO */}
                    <Botao>
                        <button>
                            <strong>Entrar</strong>
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

export default Login;