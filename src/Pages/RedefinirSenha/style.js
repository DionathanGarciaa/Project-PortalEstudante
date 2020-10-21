import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 754px;
    width: 1536px;
    background: #C4C4C4;
`;

export const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    margin-bottom: 50px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 22px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #6C63FF;
`;

export const Formulario = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    form{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 400px;
        width: 600px;
        background: #ffffff;
        color: #000;
        border-radius: 5px;
    }

    input{
        height: 38px;
        width: 265px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 15px;
        border: 1px solid ;
        border-color: #c0c0c0;
        border-radius: 8px;
        padding-left: 10px;
        padding-top: 10px;
        padding-bottom: 5px;
        color: #000;
        margin-bottom: 30px;
        outline: 0;
    }
`;

export const Box1 = styled.div`
    background: #fff;
    position: absolute;
    height:20px;
    width:44px;
    top: 267px;
    left: 640px;
    padding-top: 2px;
    padding-left: 2px;
    white-space: nowrap;
    

    label{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        margin-right: 205px;
        padding: 20px 0 1px 0;
    }
`;

export const Box2 = styled.div`
    background: #fff;
    position: absolute;
    height:20px;
    width:32px;
    top: 335px;
    left: 640px;
    padding-top: 2px;
    padding-left: 2px;
    white-space: nowrap;
    

    label{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        margin-right: 205px;
        padding: 20px 0 1px 0;
    }
`;

export const Box3 = styled.div`
    background: #fff;
    position: absolute;
    height:20px;
    width:81px;
    top: 403px;
    left: 640px;
    padding-top: 2px;
    padding-left: 2px;
    white-space: nowrap;
    

    label{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        margin-right: 205px;
        padding: 20px 0 1px 0;
    }
`;

export const Botao = styled.div`

    position: absolute;
    bottom:200px;

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 38px;
        width: 265px;
        font-size: 15px;
        border: 1px solid ;
        border-color: #c0c0c0;
        border-radius: 8px;
        padding: 10px 0 5px 10px;
        color: #6c63ff;
        margin-bottom: 30px;
        outline: 0;
        background: #ffffff;
        cursor: pointer;
    }
`;

export const Imagem = styled.div`
    position: absolute;
    top: 350px;
    left: 1030px;
`;