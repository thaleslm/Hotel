import React from 'react';
import './Login.css'

function Register(){
    return (
        <div className="Login">
            <h2>Cadastro</h2>

            <form className="FormLogin" action="http://Localhost:8080/Login" method="POST">
                Email:<input type="email" name="email"></input>
                Senha:<input type="password" name="password"></input>
                

                <button type="submit">Registro</button>
                
            </form>
        </div>
    )
}
export default Register;