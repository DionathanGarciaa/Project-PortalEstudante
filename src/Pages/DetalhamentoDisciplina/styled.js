import styled from "styled-components";

export const Container = styled.div`

`

export const Principal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Title = styled.div`
    display:flex;
    justify-content: center;
    width:100%;
 
`

export const Content = styled.div`
    align-self: flex-start;
    width:77%;

a {
    display:flex;
    text-decoration: none;
    color: #000;
    font-size: 20px;
    margin: 10px 0px;
}

h1 {
    display:flex;
    color: #000;
    font-size: 36px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: inherit;
    margin: 30px 0px 50px 0px;

}
    
`

export const Cards = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    max-width:77%;
    border: 1px solid #0E4DA4;
    border-radius: 5px;
    margin-bottom: 50px;
    padding-left:10px;
    padding-right: 10px;


button {
    display: flex;
    justify-content: center; 
    align-items: center;
    height: 60px;
    min-width: 200px;
    color: #0E4DA4;
    border: 1px solid #0E4DA4;
    background: transparent;
    border-radius: 8px;
    cursor: pointer;
    margin: 0px 20px 145px 55px;
    outline: 0;
}
`

export const Card1 = styled.div`
    display: flex;
    justify-content: flex-start; 
    align-items: center;
    height: 255px;

    color: #fff;
    overflow-x: scroll;
    ::-webkit-scrollbar {
    height: 10px;
    width: 10px;
    border-radius: 5px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 5px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 5px;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #888;
    border-radius: 5px;
  }

p {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 170px;
    min-width: 170px;
    background-color: #FFBB12;
    border-radius: 20px;
    margin: 25px;

}


`

export const Cards2 = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    max-width:77%;
    border: 1px solid #0E4DA4;
    border-radius: 5px;
    padding-left:10px;
    padding-right: 10px;

button {

    height: 60px;
    min-width: 200px;
    color: #0E4DA4;
    border: 1px solid #0E4DA4;
    background: transparent;
    border-radius: 8px;
    cursor: pointer;
    outline: 0;
    margin: 15px;
    margin: 0px 20px 145px 55px;
}

`

export const Card2 = styled.div`
    display:flex;
    height: 255px;
    color: #000;
    /* max-width: 50%; */
    overflow-x: scroll;
    ::-webkit-scrollbar {
    height: 10px;
    width: 10px;
    border-radius: 5px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 5px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 5px;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #888;
    border-radius: 5px;
  }

p {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 170px;
    min-width: 170px;
    background-color: #FFBB12;
    border-radius: 20px;
    margin: 25px;

}

p {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 170px;
    min-width: 170px;
    background-color: #F0f0f0;
    border-radius: 20px;
    margin: 25px;

}

`