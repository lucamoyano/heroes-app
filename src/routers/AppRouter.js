import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoute } from './DashboardRoute';

//import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                {/* <Navbar /> */}

                <Switch>
                    {/* Se divide el router en partes diferentes
                    Login y Dashboard
                    El Dashboard contiene el navbar */}
                    <Route exact path="/login" component={ LoginScreen } />
                    <Route path="/" component={ DashboardRoute } />
                </Switch>
            </div>
        </Router>
    )
}
