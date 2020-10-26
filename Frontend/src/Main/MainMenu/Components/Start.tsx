import React from 'react';
import {Link} from 'react-router-dom'

function Start(){
   
    return (
        <div>
            <Link to="/">
                <button className="Bmenu">
                    Inicio
                </button>
            </Link>
        </div>
    )
}

export default Start;