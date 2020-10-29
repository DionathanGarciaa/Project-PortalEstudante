import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Title, Formulario, Check, CheckBox, Box1, Box2, Senha, Botao, Imagem } from './style';
import Img from '../../Assets/img2.svg';
import Api from '../../services/Api';
import Alert from '../../components/ModalAlerts/ErroAlert';


const MeuPortal = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [checkbox, setCheckbox] = useState('');
    const [modalAlertErro, setModalAlertErro] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const history = useHistory();



    function handleSubmit(event) {
        event.preventDefault();
        loginUser();
    }

    function loginUser() {
        Api.post("/sessions", { email: email, password: senha }).then(response => {
            if (response.data.token) {
                sessionStorage.setItem("token", response.data.token)
                sessionStorage.setItem("check", checkbox)
                history.push("/Home")
            }
        }, (err) => {
            setErrorMessage(err.response.data.error);
            setModalAlertErro(true)
        })
    }

    return (

        <>
            {/* MODAL */}
            {modalAlertErro && <Alert showAlertErro={setModalAlertErro} text={errorMessage} />}

            <Container>

                {/* TITULO */}
                <Title>
                    <h1>meu portal</h1>
                </Title>

                {/* FORMULARIO */}
                <Formulario>
                    <form onSubmit={handleSubmit}>

                        {/* CHECK BOX ESTUDANTE */}
                        <Check>

                            <CheckBox>
                                <input className="Box1" id="checkbox" type="checkbox" value="3" onChange={(event) => setCheckbox(event.target.value)} />
                                <label htmlFor="checkbox">Estudante</label>
                            </CheckBox>


                            {/* CHECK BOX PROFESSOR */}
                            <CheckBox>
                                <input className="Box1" id="checkbox" type="checkbox" value="2" onChange={(event) => setCheckbox(event.target.value)} />
                                <label htmlFor="checkbox">Professor</label>
                            </CheckBox>

                        </Check>

                        {/* INPUT EMAIL */}
                        <Box1>
                            <label htmlFor="Email">E-mail</label>
                            <input id="Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                        </Box1>

                        {/* INPUT SENHA */}
                        <Box2>
                            <label htmlFor="Senha">Senha</label>
                            <input id="Senha" type="password" value={senha} onChange={(event) => setSenha(event.target.value)} minLength='6' required />
                        </Box2>

                        {/* LINK PARA REDEFINIR SENHA */}
                        <Senha>
                            <Link to="/RedefinirSenhaAlunoProfessor">
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
                    <img src={Img} alt='ilustração de alguém caminhando'></img>
                </Imagem>

            </Container>

        </>
    )
}

export default MeuPortal;