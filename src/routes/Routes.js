import React from 'react'
import { Switch, Route } from "react-router-dom";
import Padrao from '../pages/Padrao';
import Login from '../pages/LoginAdm';
import RedefinirAdm from '../pages/RedefinirSenhaAdm';
import Home from '../pages/Home';
import Matricula from '../pages/Matricula';
import CadastroUsuario from '../pages/CadastroUsuario';
import CadastrarDisciplina from '../pages/CadastrarDisciplina';
import MeuPortal from '../pages/LoginAlunoProfessor';
import RedefinirAlunoProfessor from '../pages/RedefinirSenhaAlunoProfessor';
import ListaDeDisciplinas from '../pages/ListaDeDisciplinas';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Padrao} />
            <Route path="/Login" component={Login} />
            <Route path="/RedefinirSenhaAdm" component={RedefinirAdm} />
            <Route path="/Home" component={Home} />
            <Route path="/Matricula" component={Matricula} />
            <Route path="/CadastroUsuario" component={CadastroUsuario} />
            <Route path="/CadastrarDisciplina" component={CadastrarDisciplina} />
            <Route path="/MeuPortal" component={MeuPortal} />
            <Route path="/RedefinirSenhaAlunoProfessor" component={RedefinirAlunoProfessor} />
            <Route path="/ListaDeDisciplinas" component={ListaDeDisciplinas} />
        </Switch>
    );
}
export default Routes;