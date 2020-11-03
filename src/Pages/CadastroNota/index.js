import React, { useState, useEffect } from 'react'
import Header from '../../components/Header';
import { Exit, Container, TableDiv, Button } from './style';
import { Link } from 'react-router-dom';
import { BsBoxArrowInLeft } from 'react-icons/bs';
import Api from '../../services/Api';
import AlertSuccess from '../../components/ModalAlerts/SuccessAlert';
import AlertErro from '../../components/ModalAlerts/ErroAlert';
import { useHistory } from 'react-router-dom';


const CadastroNota = () => {

    const [nota, setNota] = useState();


    return(

        <>
            <Header />

            <Exit>
                <Link to="/Home">
                    <BsBoxArrowInLeft fontSize={30} color="#000" />
                </Link>
            </Exit>
            
            <Container>

                <TableDiv>
                <table className="flTable">
                    <thead>
                        <tr>
                            <th><strong>Alunos</strong></th>
                            <th><strong>Nota</strong></th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            Gustavo
                        </td>
                        <td>
                            <input onChange={(event) => setNota(event.target.value)} className={nota >= 6 ? "greenNote" : "redNote"}></input>
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