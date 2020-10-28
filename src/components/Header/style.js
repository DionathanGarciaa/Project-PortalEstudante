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
    display: flex;
    flex-direction: column;
    

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 12px;
        margin-top: 25px;       
    }

    ul{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 150px;
        height: 100px;
        background: #6C63FF;
        padding: 10px 0 5px 0;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        font-size: 19px;
        
    }

    li{
        color: #000;
        list-style-type: none;
        margin: 10px 5px 0 5px;
        padding: 0 0 5px 0;
        color: #fff;
    }

    a{
        text-decoration:none;
        color: #fff;
    }
`;