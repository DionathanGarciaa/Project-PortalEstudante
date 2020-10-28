import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 87px;
    background-color: #6C63FF;
    
    h2 {
        height: 200px;
        width: 250px;
        color: #fff;
        font-family: Helvetica, Arial,  sans-serif;
        font-size: 24px;
        padding: 30px;
    }
`;

export const User = styled.div`
    padding: 10px;

    div{
        position: relative;
    }

    [div] .ul{
        display: none;
    }

    [div]:hover .ul{
        display: none;
    }

    ul{
        position: absolute;
        top:87px;
        right: 0;
        width: 100px;
        background: #6C63FF;
        z-index:4;
    }

    li{
        color: #000;
        list-style-type: none;
    }

    li:hover{
        color:#fff;
        cursor: pointer;
    }
`;