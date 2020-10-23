import React from 'react';
import GlobalStyle from './Style/global.js';
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