import React from 'react';
import Header from '../Header';

// import { Container } from './styles';

function MasterPage(props) {
  return (<>
  
    <Header></Header>
    <div>
        {props.children}
    </div>
  
  
  
   </>);
}

export default MasterPage;