import React from 'react';
import { Switch, Route } from "react-router-dom";
import Padrao from '../Pages/Padrao';
import Login from '../Pages/LoginAdm';
import RedefinirAdm from '../Pages/RedefinirSenhaAdm';
import MeuPortal from '../Pages/LoginAlunoProfessor';
import RedefinirAlunoProfessor from '../Pages/RedefinirSenhaAlunoProfessor';

import Home from '../Pages/Home';
import Matricula from '../Pages/Matricula';

import CadastroUsuario from '../Pages/CadastroUsuario';
import CadastrarDisciplina from '../Pages/CadastrarDisciplina';
import CadastroConteudo from '../Pages/CadastroConteudo';
import ListaDeDisciplinas from '../Pages/ListaDeDisciplinas';
import DetalhamentoDisciplina from '../Pages/DetalhamentoDisciplina';
import VisualizarContent from '../Pages/VisualizarContent';
import CadastroNota from '../Pages/CadastroNota';


import ProtectedRoute from '../helper/ProtectedRoute';

function Routes() {

    return (
        <Switch>
            <Route path="/" exact component={Padrao} />
            <Route path="/Login" component={Login} />
            <Route path="/RedefinirSenhaAdm" component={RedefinirAdm} />
            <Route path="/MeuPortal" component={MeuPortal} />
            <Route path="/RedefinirSenhaAlunoProfessor" component={RedefinirAlunoProfessor} />
<<<<<<< HEAD
            <Route path="/DetalhamentoDisciplina" component={DetalhamentoDisciplina} />
=======
>>>>>>> f9c42039bb93f00b1f58a1d0f0c85487b755b113
            <ProtectedRoute path="/Home" component={Home} />
            <ProtectedRoute path="/Matricula" component={Matricula} />
            <ProtectedRoute path="/CadastroUsuario" component={CadastroUsuario} />
            <ProtectedRoute path="/CadastrarDisciplina" component={CadastrarDisciplina} />
            <Route path="/DetalhamentoDisciplina" component={DetalhamentoDisciplina} />
            <ProtectedRoute path="/ListaDeDisciplinas" component={ListaDeDisciplinas} />
<<<<<<< HEAD
            <ProtectedRoute path="/ListarContent" component={ListarContent} />
=======
            <ProtectedRoute path="/CadastroConteudo" component={CadastroConteudo} />
            <ProtectedRoute path="/VisualizarContent" component={VisualizarContent} />
            <ProtectedRoute path="/CadastroNota" component={CadastroNota} />
>>>>>>> f9c42039bb93f00b1f58a1d0f0c85487b755b113
        </Switch>
    );
}
export default Routes;