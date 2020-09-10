import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import GridCasos from './GridCasos/GridCasos'
import Pantient from './Pantient/Pantient'
import CreateCasos from './CreateCasos/CreateCasos'
import EtapaInicial from './EtapaInicial/EtapaInicial'
import CreatePantient from './Pantient/CreatePantient'
import UpdatePantient from './Pantient/UpdatePantiet'

const Routes  = () => {
    return (
        <BrowserRouter>
            <Switch>
                
                <Route path='/gridcasos' component={GridCasos}  />
                <Route path='/pantient' component={Pantient}  />
                <Route path='/createcasos' component={CreateCasos}  />
                <Route path='/etapainicial' component={EtapaInicial}  />
                <Route path='/createpantient' component={CreatePantient}  />
                <Route path='/updatepantient/:idpantients' component={UpdatePantient}  />
                <Route path="/" > 
                    <Redirect to="/pantient" />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes