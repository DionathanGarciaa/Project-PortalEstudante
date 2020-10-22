import styled from "styled-components";

export const Content = styled.div`

a {
    display: flex;
    justify-content: flex-end;
    text-decoration: none;
    font-size: 24px;  
    font-weight: bolder;  
    color: #F01414  ;

}
`;

export const Title = styled.div`
    display: flex;
    justify-content: center;

h1{
    display: flex;
    align-items: flex-start;
    font-weight: inherit;
    font-size: 28px;
    padding-bottom: 20px;
    color: #000
}
`;


export const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    background: #fff;
    justify-content:center;
    align-items:center;

input {
    width: 100%;
    border: 1px solid rgba(196, 196, 196, 0.56);;
    background: rgba(196, 196, 196, 0.56);
    border-radius: 5px 5px 0 0;
    border-bottom: 1px solid #263238;
    outline: none;
    font-size: 16px;
    box-sizing: border-box;
    padding: 19px;
    margin-bottom: 25px;
}

.input1 {
    width: 225px;
}

.input2 {
    width: 225px;
}

input::placeholder {
    color: #000;
}
`;

export const Select = styled.div`
    width:100%;
select {
    width:100%;
    border: 1px solid rgba(196, 196, 196, 0.56);;
    background: rgba(196, 196, 196, 0.56);
    border-radius: 5px 5px 0 0;
    border-bottom: 1px solid #263238;
    outline: none;
    box-sizing: border-box;
    font-size: 16px;
    color: #000;
    padding: 19px;
    margin-bottom: 35px;
    -webkit-appearance: none; 
}
`;

export const Button = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;

button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 55px;
    width: 180px;
    color: #0E4DA4;
    border: 1px solid #0E4DA4;
    background: transparent;
    border-radius: 8px;
}
`;