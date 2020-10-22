import styled from "styled-components";

export const Content = styled.div`


a {
    display: flex;
    text-decoration: none;
    font-size: 16px;
    padding: 40px 0px 70px 145px;
    color: #000;

}
`

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height:540px;



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

input::placeholder {
    color: #000;
}

`;


export const Selects = styled.div`
margin-top:60px;
display: grid;
grid-template-columns: 1fr 1fr;
gap:60px;
column-gap: 120px;

select {
    width: 550px;
    height: 73px;
    border: 1px solid rgba(196, 196, 196, 0.56);;
    background: rgba(196, 196, 196, 0.56);
    border-radius: 5px 5px 0 0;
    border-bottom: 1px solid #263238;
    outline: none;
    box-sizing: border-box;
    font-size: 16px;
    color: #000;
    padding: 19px;
    -webkit-appearance: none; 
    

}

`;
export const Button = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-right: 145px;

button {
    height: 60px;
    width: 200px;
    color: #0E4DA4;
    border: 1px solid #0E4DA4;
    background: transparent;
    border-radius: 8px;
}
   
`
