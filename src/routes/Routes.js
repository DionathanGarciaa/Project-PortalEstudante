import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from '../pages/Home';
import Matricula from '../pages/Matricula';
import CadastroUsuario from '../pages/CadastroUsuario';


function Routes() {
    return (
        <Switch>
            <Route path="/Home" component={Home}/>
            <Route path="/Matricula" component={Matricula}/>
            <Route path="/CadastroUsuario" component={CadastroUsuario}/>
        </Switch>
    );
}
 export default Routes;