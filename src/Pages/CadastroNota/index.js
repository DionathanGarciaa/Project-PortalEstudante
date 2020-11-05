import React, { useEffect, useState } from 'react'
import { Exit, Container, TableDiv, Button } from './style';
import { Link } from 'react-router-dom';
import { BsBoxArrowInLeft } from 'react-icons/bs';
import Api from '../../services/Api';



const CadastroNota = ({ ...props }) => {

    const [nota, setNota] = useState();
    const [alunos, setAlunos] = useState()



    const data = props.location.state;


    useEffect(() => {
        Api.get('listadeAlunos', { disciplines: data._id }).then((response) => {
            console.log(response)
            setAlunos(response.data)
        })
    }, [data._id])


    console.log(alunos)



    return (

        <>

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
                            <input onChange={(event) =>  {
                                let notas = [...nota];
                                notas[0] = event.target.value;
                                setNota(notas)
                            }} className={nota[0] >= 6 ? "greenNote" : "redNote"}></input>
                            {console.log(nota)}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Gustavo
                        </td>
                        <td>
                            <input onChange={(event) =>  {
                                let notas = [...nota];
                                notas[1] = event.target.value;
                                setNota(notas)
                            }} className={nota[1] >= 6 ? "greenNote" : "redNote"}></input>
                            {console.log(nota)}
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