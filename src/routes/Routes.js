import React from 'react'
import { Switch, Route } from "react-router-dom";
import Padrao from '../pages/Padrao';
import Login from '../pages/Login';
import Redefinir from '../pages/RedefinirSenha';
import Home from '../pages/Home';
import Matricula from '../pages/Matricula';
import CadastroUsuario from '../pages/CadastroUsuario';
import CadastrarDisciplina from '../pages/CadastrarDisciplina';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Padrao}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Redefinir" component={Redefinir}/>
            <Route path="/Home" component={Home}/>
            <Route path="/Matricula" component={Matricula}/>
            <Route path="/CadastroUsuario" component={CadastroUsuario}/>
            <Route path="/CadastrarDisciplina" component={CadastrarDisciplina}/>
        </Switch>
    );
}
 export default Routes;