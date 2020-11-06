import React from 'react';
import { Switch, Route } from "react-router-dom";
import Padrao from '../pages/Padrao';
import Login from '../pages/LoginAdm';
import RedefinirAdm from '../pages/RedefinirSenhaAdm';
import MeuPortal from '../pages/LoginAlunoProfessor';
import RedefinirAlunoProfessor from '../pages/RedefinirSenhaAlunoProfessor';
import Home from '../pages/Home';
import Matricula from '../pages/Matricula';
import CadastroUsuario from '../pages/CadastroUsuario';
import CadastrarDisciplina from '../pages/CadastrarDisciplina';
import CadastroConteudo from '../pages/CadastroConteudo';
import ListaDeDisciplinas from '../pages/ListaDeDisciplinas';
import DetalhamentoDisciplina from '../pages/DetalhamentoDisciplina';
import VisualizarContent from '../pages/VisualizarContent';
import CadastroNota from '../pages/CadastroNota';
import ProtectedRoute from '../helper/ProtectedRoute';

function Routes() {

    return (
        <Switch>
            <Route path="/" exact component={Padrao} />
            <Route path="/Login" component={Login} />
            <Route path="/RedefinirSenhaAdm" component={RedefinirAdm} />
            <Route path="/MeuPortal" component={MeuPortal} />
            <Route path="/RedefinirSenhaAlunoProfessor" component={RedefinirAlunoProfessor} />
            <Route path="/DetalhamentoDisciplina" component={DetalhamentoDisciplina} />
            <ProtectedRoute path="/Home" component={Home} />
            <ProtectedRoute path="/Matricula" component={Matricula} />
            <ProtectedRoute path="/CadastroUsuario" component={CadastroUsuario} />
            <ProtectedRoute path="/CadastrarDisciplina" component={CadastrarDisciplina} />
            <ProtectedRoute path="/ListaDeDisciplinas" component={ListaDeDisciplinas} />
            <ProtectedRoute path="/CadastroConteudo" component={CadastroConteudo} />
            <ProtectedRoute path="/VisualizarContent" component={VisualizarContent} />
            <ProtectedRoute path="/CadastroNota" component={CadastroNota} />
        </Switch>
    );
}
export default Routes;