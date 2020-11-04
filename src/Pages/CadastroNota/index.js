import React, { useState } from 'react'
import Header from '../../components/Header';
import { Exit, Container, TableDiv, Button } from './style';
import { Link } from 'react-router-dom';
import { BsBoxArrowInLeft } from 'react-icons/bs';



const CadastroNota = ({ ...props }) => {

    const [nota, setNota] = useState();
    const data = props.location.state;

    return (

        <>
            <Header />

            <Exit>
                <Link to={{
                    pathname: '/DetalhamentoDisciplina',
                    state: data
                }}>
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