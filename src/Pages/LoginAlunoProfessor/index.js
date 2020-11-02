import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Title, Formulario, Check, CheckBox, Box1, Box2, Senha, Botao, Imagem } from './style';
import Img from '../../Assets/img2.svg';
import Api from '../../services/Api';
import Alert from '../../components/ModalAlerts/ErroAlert';


const MeuPortal = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setloading] = useState(false);
    const [checkbox, setCheckbox] = useState('');
    const [modalAlertErro, setModalAlertErro] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const history = useHistory();




    function handleSubmit(event) {
        event.preventDefault();
        loginUser();
    }



    function loginUser() {
        setloading(true)
        if (checkbox === "2") {
            Api.post("/sessions/teacher", { email: email, password: senha }).then(response => {
                if (response.data.token) {
                    sessionStorage.setItem("token", response.data.token)
                    sessionStorage.setItem("firstname", response.data.user.firstname)
                    sessionStorage.setItem("check", checkbox)
                    history.push({
                        pathname: "/ListaDeDisciplinas",
                        state: response.data
                    })

                }
            }, (err) => {
                setErrorMessage(err.response.data.error);
                setModalAlertErro(true)
                setloading(false)
            })
        } else {
            Api.post("/sessions", { email: email, password: senha }).then(response => {
                if (response.data.token) {
                    sessionStorage.setItem("token", response.data.token)
                    sessionStorage.setItem("firstname", response.data.user.firstname)
                    sessionStorage.setItem("check", checkbox)
                    history.push({
                        pathname: "/ListaDeDisciplinas",
                        state: response.data.user
                    })
                }
            }, (err) => {
                setErrorMessage(err.response.data.error);
                setModalAlertErro(true)
                setloading(false)
            })
        }
    }

    console.log(checkbox)

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
                                <input className="Box1" id="checkbox" type="radio" value="3" name="box1" onChange={({ target }) => setCheckbox(target.value)} />
                                <label htmlFor="checkbox">Estudante</label>
                            </CheckBox>


                            {/* CHECK BOX PROFESSOR */}
                            <CheckBox>
                                <input className="Box1" id="checkbox" type="radio" value="2" name="box1" onClick={({ target }) => setCheckbox(target.value)} />
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
                            {loading ? <button > <strong>Carregando...</strong> <span className="carregando"></span></button> : <button> <strong>Entrar</strong> </button>}
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