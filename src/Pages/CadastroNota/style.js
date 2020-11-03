import styled from "styled-components";


export const Exit = styled.div`
    margin: 3% 0 1% 10%;

    a {
        color: #000;
    }
`;

export const Container = styled.div`
    width: 70%; 
    margin: 45px auto;
`;

export const Title = styled.div`
font-size: 26px;
`;

export const TitleContent = styled.div`
font-size: 20px;

span{
    color: #0E4DA4;
}

`;

export const Descricao = styled.div`
font-size: 20px;
padding-bottom:0.5%;
`;

export const DescCont = styled.textarea`
padding:2%;
max-width:96%;
min-width:96%;
min-height:120px
`;

export const Clear = styled.div`
padding:1.2%;
`;

export const Button = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-top: 25px;
    margin-bottom: 10%;

    button {
        height: 60px;
        width: 200px;
        color: #0E4DA4;
        border: 1px solid #0E4DA4;
        background: transparent;
        border-radius: 8px;
        cursor: pointer;
        outline: 0;
    }
`;


export const TableDiv = styled.div`

    #nota{
        border:solid;
        border-radius:7px;
        text-align:left;
        border-width:1px;
        width: 3%;
    }

    line-height:25px;
    font-family: Open Sans;


    .redNote{
        border:solid;
        border-radius:7px;
        text-align:left;
        border-color:red;
        color:red;
        border-width:1px;
        width: 3%;
    }

    .redNote:focus{
        border-color:red;
    }

    .greenNote{
        border:solid;
        border-radius:7px;
        text-align:left;
        border-color:#7FC008;
        color:#7FC008;
        border-width:1px;
        width: 3%;
    }

    .greenNote:focus{
        border-color:#7FC008;
    }

    span{
        padding: 2px 9px;
        font-size: 13px;
    }

    input{
        padding: 2px 9px;
        font-size: 13px;
    }


`;