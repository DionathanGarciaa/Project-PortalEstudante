import React from 'react'
import { Switch, Route } from "react-router-dom";
import Home from '../Pages/Home';


function Routes() {
    return (
        <Switch>
            <Route path="/Home" component={Home}/>
        </Switch>
    );
}
 export default Routes;