import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext';

import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    //Obtener ultimo path visitado (guardado en localStorage)
    const lastPath = localStorage.getItem('lastPath') || '/';

    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        //Redireccionar usando history

        //Reemplazar que visito el login, y cambiar a '/'
        //si vuelve para atras, no vera la ruta anterior visitada
        //history.replace('/'); 
        history.replace(lastPath); //Redireccionar a la ultima página visitada 
        
        //Cambiar a otra ruta, si vuelve para atras
        //ver la ruta anterior
        //history.push('/'); 
        
        dispatch({
            type: types.login,
            payload: {
                name: 'Lucas'
            }
        });

    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>

        </div>
    )
}
