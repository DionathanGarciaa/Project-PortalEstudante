import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Padrao from '../Pages/Padrao';
import Login from '../Pages/Login';
import Redefinir from '../Pages/RedefinirSenha';
import Home from '../Pages/Home';


function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Padrao}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Redefinir" component={Redefinir}/>
            <Route path="/Home" component={Home}/>
        </Switch>
    );
}
 export default Routes;