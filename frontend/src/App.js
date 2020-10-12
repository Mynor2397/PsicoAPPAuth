import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from './Component/Organisms/Header';
import Protected from './Routes./Protected';
import Public from './Routes./Public';
import Login from './Component/Pages/Login';
import PagesRol from './Component/Pages/PagesRol';
import Page404 from './Component/Pages/Page404';
import GridCasos from './Component/GridCasos/GridCasos';
import CreatePantientv1 from './Component/Pantient/CreatePantientv1'
import Pantient from './Component/Pantient/Pantient';
import CreateCasos from './Component/CreateCasos/CreateCasos';
import UpdateCasos from './Component/CreateCasos/UpdateCasos';
import Etapas from './Component/Etapas/Etapas';

import './App.scss';
import CrearDiagnostico from './Component/Pages/CrearDiagnostico';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Protected path='/gridcasos' exact component={GridCasos} />
        <Protected path='/pantient' component={Pantient}  />
        <Protected path='/createpantient/:idpantients?' component={CreatePantientv1} />
        <Protected path='/updatepantient/:idpantients' component={CreatePantientv1} />
        <Protected path='/etapas/:idCasos' component={Etapas} />
        <Protected path='/creardiagnostico/:idDiag' component={CrearDiagnostico} />
        <Protected path='/createcasos' exact component={CreateCasos}  />
        <Protected path='/updatecasos/:idcases' component={UpdateCasos} />
        
        <Public path="/login" exact component={Login} />

        <Route path="/segurity" exact component={PagesRol} />

        <Route component={Page404} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
