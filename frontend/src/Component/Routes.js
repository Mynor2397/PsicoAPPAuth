import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import GridCasos from './GridCasos/GridCasos'
import Pantient from './Pantient/Pantient'
import CreateCasos from './CreateCasos/CreateCasos'
import UpdateCasos from './CreateCasos/UpdateCasos'
import EtapaInicial from './EtapaInicial/EtapaInicial'
// import CreatePantient from './Pantient/CreatePantient'
import UpdatePantient from './Pantient/UpdatePantiet'
import CreatePantientv1 from './Pantient/CreatePantientv1'

const Routes  = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/gridcasos' component={GridCasos}  />
                <Route path='/pantient' component={Pantient}  />
                <Route path='/createcasos' component={CreateCasos}  />
                <Route path='/updatecasos/:idcases' component={UpdateCasos}  />
                <Route path='/etapainicial' component={EtapaInicial}  />
                <Route path='/createpantient' component={CreatePantientv1}  />
                <Route path='/updatepantient/:idpantients' component={UpdatePantient}  />
                <Route path="/" > 
                    <Redirect to="/pantient" />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes