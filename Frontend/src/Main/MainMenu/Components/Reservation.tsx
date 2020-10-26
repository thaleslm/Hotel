import React from 'react';
import {Link} from 'react-router-dom'

function Reservation(){
    return(
    <div>
        <Link to="Reservation">
            <button className="Bmenu">
                Reservar
            </button>
        </Link>
        </div>
    )

}

export default Reservation;