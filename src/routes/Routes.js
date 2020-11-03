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
import CadastroNota from '../Pages/CadastroNota';
import CadastroConteudo from '../Pages/CadastroConteudo';
import VisualizarConteudo from '../Pages/VisualizarConteudo';

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
            <Route path="/CadastroNota" component={CadastroNota} />
            <Route path="/CadastroConteudo" component={CadastroConteudo} />
            <Route path="/VisualizarConteudo" component={VisualizarConteudo} />
        </Switch>
    );
}
export default Routes;