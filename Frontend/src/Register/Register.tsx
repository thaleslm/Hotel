import React from 'react';
import './Register.css'

function Register(){
    return (
        <div className="Register">
            <h2>Cadastro</h2>

            <form className="FormRegister" action="http://Localhost/3003" method="POST">
                Email:<input type="text" name="email"/>
                Senha:<input type="password" name="password"></input>
                Repita senha:<input type="password" name="password"></input>

                <button type="submit">Registro</button>
                
            </form>
        </div>
    )
}
export default Register;