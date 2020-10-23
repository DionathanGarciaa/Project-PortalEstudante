import React from 'react';
import GlobalStyle from './style/global';
import Routes from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (

        <BrowserRouter>
          <Routes />
          <GlobalStyle/>
        </BrowserRouter>
  
  );
}

export default App;