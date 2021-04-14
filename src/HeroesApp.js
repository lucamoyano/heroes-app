import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/AuthContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'

//Obtener usuario de localStorge
const init = () => {
    return JSON.parse( localStorage.getItem('user') ) || { logged: false };
}

export const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init)

    //Guardar datos en localStorage cuando el usuario cambia
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify( user ));
    }, [user])

    return (
        <AuthContext.Provider value={{ user, dispatch }} >
            <AppRouter />
        </AuthContext.Provider>
    )
}
