import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CadastroCliente from './pages/CadastroCliente/CadastroCliente';
import Home from './pages/Home/Home';
import UserProfile from './pages/UserProfile/UserProfile';
import ProductsPage from './pages/Products/ProductsPage';

const routes = () =>{
    return(
        <Switch>
            <Route path='/cadastroCliente'>
                <CadastroCliente />
            </Route>
            <Route path='/perfil'>
                <UserProfile />
            </Route>
            <Route path='/products'>
                <ProductsPage />
            </Route>
            <Route path='/'>
                <Home />
            </Route>
        </Switch>
    );
}

export default routes;