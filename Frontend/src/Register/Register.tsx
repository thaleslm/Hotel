import React from 'react';
import './Register.css'

function Register(){
    return (
        <div className="Register">
            <h2>Registro de vaga</h2>

            <form className="FormRegister" action="http://Localhost:8080/Register" method="POST">
                name:<input type="text" name="name"></input>
                Email:<input type="email" name="email"></input>
                Senha:<input type="password" name="password"></input>
                Data:<input  type="date" name="data"></input>

                

                <button type="submit">Registro</button>
                
            </form>
        </div>
    )
}
export default Register;