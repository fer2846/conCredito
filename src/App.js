import React from 'react'
import { GetAllProspects } from './components/listadoProspesctos/GetAllProspects'
import { NavBar } from './components/nav/NavBar'
import {BrowserRouter as Router, Switch , Route} from "react-router-dom";
import { CaptProspects } from './components/capturaProspectos/CaptProspects';
import { GetEvalProspects } from './components/evaluacionProspectos/GetEvalProspects';
import { ViewAllData } from './components/listadoProspesctos/ViewAllData';

export const App = () => {




    return (
        <Router>
            <>
                <NavBar brand='ConCrédito'/>
                <Switch>
                    <Route exact path="/prospecto/:id" component={ ViewAllData }/>
                    <Route path="/captura" component={ CaptProspects }/>
                    <Route path="/evaluacion" component={ GetEvalProspects }/>
                    <Route path="/" component={ GetAllProspects }/>
                </Switch>
            </>
        </Router>
    )
}
