import styled from "styled-components";


export const Container = styled.div`
`;

export const Titulo = styled.div`

    h1 {
        color: #000;
        font-size: 50px;
        font-weight: inherit;
        margin: 50px 0 15px 150px; 
    }
`;

export const Disciplina = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: 80%;
    width: 95%;
    margin: 30px 0 0 25px;
    background-color: #393e46;
    color: #000;
    border-radius: 15px;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70px;
    width: 300px;
    margin: 10px;
    background: #00adb5;
    color: #fff;
    border: ridge;
    border-color: #fff;
    

    h4{
        color: #000;
    }

    span{
        text-transform: uppercase;
        color: #a9a9a9;
    }
 `;