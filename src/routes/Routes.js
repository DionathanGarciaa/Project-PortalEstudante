import React from 'react'
import { Switch, Route } from "react-router-dom";
import Padrao from '../Pages/Padrao';
import Login from '../Pages/Login';
import Redefinir from '../Pages/RedefinirSenha';
import Home from '../Pages/Home';
import Matricula from '../Pages/Matricula';
import CadastroUsuario from '../Pages/CadastroUsuario';
import CadastrarDisciplina from '../Pages/CadastrarDisciplina';
import DetalhamentoDisciplina from '../Pages/DetalhamentoDisciplina';

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
            <Route path="/DetalhamentoDisciplina" component={DetalhamentoDisciplina} />
        </Switch>
    );
}
 export default Routes;