import styled from "styled-components";


export const Container = styled.div`
`;

export const Titulo = styled.div`

    h1 {
        color: #000;
        font-size: 50px;
        font-weight: inherit;
        margin: 60px 0 15px 160px; 
    }
`;

export const Disciplina = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 30px 150px 0 150px;
    color: #000;
    border-radius: 5px;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 125px;
    width: 350px;
    margin: 10px;
    background: #f0f0f0;
    border-radius: 8px;

    h4{
        text-transform: uppercase;
        color: #000;
        margin: 10px 10px 10px 20px;
    }

    span{
        text-transform: uppercase;
        color: #a9a9a9;
        margin: 10px 10px 10px 20px;
    }
    
    a{
        text-decoration: none;
        color: #6C63FF;
    }
 `;