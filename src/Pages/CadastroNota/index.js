import React, { useState, useEffect } from 'react'
import Header from '../../components/Header';
import { Exit, Container, TableDiv, Button } from './style';
import { Link } from 'react-router-dom';
import { BsBoxArrowInLeft } from 'react-icons/bs';
import Api from '../../services/Api';
import AlertSuccess from '../../components/ModalAlerts/SuccessAlert';
import AlertErro from '../../components/ModalAlerts/ErroAlert';
import { useHistory } from 'react-router-dom';
import styles from './index.module.css';


const CadastroNota = () => {

    const [nota, setNota] = useState();
    var element = document.getElementById("nota");


    if(nota >= 6){
        element.classList.remove("redNote");
        element.classList.add("greenNote");

    }

    if (nota <= 5){
        element.classList.remove("greenNote");
        element.classList.add("redNote");
    }


    return(

        <>

            {/* CABEÇALHO */}
            <Header />

            
            <Exit>
                <Link to="/Home">
                    <BsBoxArrowInLeft fontSize={30} color="#000" />
                </Link>
            </Exit>
            
            <Container>

                <TableDiv>
                <table class={styles.flTable}>
                    <thead>
                        <tr>
                            <th><strong>Alunos</strong></th>
                            <th><strong>Nota</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            Gustavoeqwe
                        </td>
                        <td>
                            <input id="nota" onChange={(event) => setNota(event.target.value)}></input>
                        </td>
                        </tr>
                    </tbody>
                </table>
                </TableDiv>

                <Button>
                    <button>Salvar</button>
                </Button>

            </Container>
        </>
    )
}

export default CadastroNota;