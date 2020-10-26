import React from 'react';
import{Link} from 'react-router-dom'

function Gym(){
    return (
    <div>
            <Link  to="Gym">
            <button className="Bmenu">
                Academia
            </button>
            </Link>
    </div>
    )
}

export default Gym;