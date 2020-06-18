//rotas que qq usuário pode ter acesso
import React from 'react';
import { Route } from 'react-router-dom'
import Login from '../pages/Login'

const PublicRoutes = () => {
    return (
        <>
            <Route exact path='/' component={Login} />
            <Route exact path='/login' component={Login} />
        </>
    );
};

export default PublicRoutes;