import React from 'react'
import { Switch, Route } from "react-router-dom";
import Padrao from '../Pages/Padrao';
import Login from '../Pages/LoginAdm';
import RedefinirAdm from '../Pages/RedefinirSenhaAdm';
import Home from '../Pages/Home';
import Matricula from '../Pages/Matricula';
import CadastroUsuario from '../Pages/CadastroUsuario';
import CadastrarDisciplina from '../Pages/CadastrarDisciplina';
import MeuPortal from '../Pages/LoginAlunoProfessor';
import RedefinirAlunoProfessor from '../Pages/RedefinirSenhaAlunoProfessor';
import CadastroContent from '../Pages/CadastroContent';
import ListaDeDisciplinas from '../Pages/ListaDeDisciplinas';


import ProtectedRoute from '../helper/ProtectedRoute';



function Routes() {

    return (
        <Switch>
            <Route path="/" exact component={Padrao} />
            <Route path="/Login" component={Login} />
            <Route path="/RedefinirSenhaAdm" component={RedefinirAdm} />
            < ProtectedRoute path="/Home" component={Home} />
            < ProtectedRoute path="/Matricula" component={Matricula} />
            <ProtectedRoute path="/CadastroUsuario" component={CadastroUsuario} />
            <ProtectedRoute path="/CadastrarDisciplina" component={CadastrarDisciplina} />
            <Route path="/MeuPortal" component={MeuPortal} />
            <Route path="/RedefinirSenhaAlunoProfessor" component={RedefinirAlunoProfessor} />
            <ProtectedRoute path="/CadastroContent" component={CadastroContent} />
            <ProtectedRoute path="/ListaDeDisciplinas" component={ListaDeDisciplinas} />
        </Switch>
    );
}
export default Routes;