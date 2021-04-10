import React from 'react'
import { Redirect, Route, Switch } from 'react-router';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroeScreen } from '../components/heroes/HeroeScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';

import { Navbar } from '../components/ui/Navbar';

export const DashboardRoute = () => {
    return (
        <>
            <Navbar />  
            {/* Rutas del dashboard si estamos logueados */}
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    <Route exact path="/hero/:heroeId" component={ HeroeScreen } />
                    <Route exact path="/dc" component={ DcScreen } />
                    <Redirect to="/marvel" />
                </Switch>
            </div>

        </>
    )
}