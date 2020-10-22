import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height:100%;
    background: #c0c0c0;
`;

export const ContainerExt = styled.div`
    height: 55%;
    width:30%;
    border-radius: 5px;
    border-color: #6C63FF;
    background: #fff;
`;

export const Content = styled.div`
    display:flex;
    justify-content: flex-end;
    width: 50px;
    margin-left: 462px;

    a{
        display: flex;
        justify-content: flex-end;
        text-decoration: none;
        padding: 20px;
        font-size: 24px;  
        font-weight: bolder;  
        color: #F01414  ;
    }
`;

export const ContainerInt = styled.div`

background: blue;
`;

export const Title = styled.div`
    display: flex;

    h1{
        font-weight: inherit;
        font-size: 28px;
        padding: 40px 0px 70px 145px;
        color: #000
}
`;

export const Formulario = styled.div`
    height: 25%;
    width: 25%;
    background: green;

    input {
        width: 550px;
        height: 73px;
        border: 1px solid rgba(196, 196, 196, 0.56);;
        background: rgba(196, 196, 196, 0.56);
        border-radius: 5px 5px 0 0;
        border-bottom: 1px solid #263238;
        outline: none;
        font-size: 16px;
        box-sizing: border-box;
        padding: 19px;
}
.input1 {
    width: 300px;
}

.input2 {
    width: 300px;
}

.input3 {
    width: 300px;
}

input::placeholder {
    color: #000;
}
`;



export const Button = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 50px;
    padding-right: 145px;

button {
    height: 60px;
    width: 200px;
    color: #0E4DA4;
    border: 1px solid #0E4DA4;
    background: transparent;
    border-radius: 8px;
}
`;