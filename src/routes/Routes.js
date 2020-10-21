import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Padrao from '../Pages/Padrao/index';
import Login from '../Pages/Login/index';
import Redefinir from '../Pages/RedefinirSenha/index';
import Home from '../Pages/Home/index';


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