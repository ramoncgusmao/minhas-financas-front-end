import React from 'react'

import { Route, Switch, HashRouter} from 'react-router-dom'
import Login from '../views/login'
import CadastroUsuario from '../views/cadastroUsuario'
import Home from '../views/home'
function Router(){
    return (
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/cadastro-usuario" component={CadastroUsuario} />
                <Route path="/" component={Home} />
            </Switch>
        </HashRouter>
    )
}

export default Router