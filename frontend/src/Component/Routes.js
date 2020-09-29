import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import GridCasos from './GridCasos/GridCasos'
import Pantient from './Pantient/Pantient'
import CreateCasos from './CreateCasos/CreateCasos'
import UpdateCasos from './CreateCasos/UpdateCasos'
import CreatePantientv1 from './Pantient/CreatePantientv1'
import Etapas from './Etapas/Etapas'

const Routes  = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/gridcasos' component={GridCasos}  />
                <Route path='/pantient' component={Pantient}  />
                <Route path='/createpantient/:idpantients?' component={CreatePantientv1}  />
                <Route path='/updatepantient/:idpantients' component={CreatePantientv1} />
                <Route path='/createcasos' component={CreateCasos}  />
                <Route path='/updatecasos/:idcases' component={UpdateCasos}  />
                <Route path='/etapas/:idCasos' component={Etapas}  />
                {/* <Route path='/updatecase/:idpantients' component={UpdateCasos}  /> */}
                <Route path="/" > 
                    <Redirect to="/gridcasos" />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes