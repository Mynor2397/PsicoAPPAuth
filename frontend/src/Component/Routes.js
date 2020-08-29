import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import GridCasos from './GridCasos/GridCasos'
import Pantient from './Pantient/Pantient'
import CreateCasos from './CreateCasos/CreateCasos'
import EtapaInicial from './EtapaInicial/EtapaInicial'

const Routes  = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/gridcasos' component={GridCasos}  />
                <Route path='/pantient' component={Pantient}  />
                <Route path='/createcasos' component={CreateCasos}  />
                <Route path='/Etapainicial' component={EtapaInicial}  />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes