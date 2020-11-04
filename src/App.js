import React from 'react';
import GlobalStyle from './style/global';
import Routes from './routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import MasterPage from '../src/components/MasterPage';

const App = (props) => {

  const loginPage = window.location.pathname.includes("login");

  return (

        <BrowserRouter>

          { loginPage ? <MasterPage>
            <Routes />
          </MasterPage> : <Routes />
          }
          <GlobalStyle/>
        </BrowserRouter>
  
  );
}

export default App;