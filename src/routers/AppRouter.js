import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoute } from './DashboardRoute';



//import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () => {

    const { user } = useContext(AuthContext);

    return (
        <Router>
            <div>
                {/* <Navbar /> */}

                <Switch>
                    
                    {/* Se divide el router en partes diferentes
                    Login y Dashboard
                    El Dashboard contiene el navbar */}
                    {/* <Route exact path="/login" component={ LoginScreen } /> */}

                    <PublicRoute 
                        exact
                        path="/login" 
                        component={ LoginScreen } 
                        isAuthenticated={ user.logged }
                    />

                    {/* <Route path="/" component={ DashboardRoute } /> */}

                    {/* Rutas privadas */}
                    <PrivateRoute 
                        path="/" 
                        component={ DashboardRoute }
                        isAuthenticated={ user.logged }
                    />
                </Switch>
            </div>
        </Router>
    )
}
