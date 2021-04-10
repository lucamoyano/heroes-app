import React from 'react'

export const LoginScreen = ({ history }) => {

    const handleLogin = () => {
        //Redireccionar usando history

        //Reemplazar que visito el login, y cambiar a '/'
        //si vuelve para atras, no vera la ruta anterior visitada
        history.replace('/'); 
        
        //Cambiar a otra ruta, si vuelve para atras
        //ver la ruta anterior
        //history.push('/'); 
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
