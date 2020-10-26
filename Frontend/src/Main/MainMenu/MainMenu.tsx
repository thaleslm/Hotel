import React, { Fragment } from 'react';

import './MainMenu.css';
import Start from './Components/Start';
import Reservation from './Components/Reservation';
import Gym from './Components/Gym';
import Contact from './Components/Contact'
import Register from './Components/Register'



function MainMenu (){
    return(
        <Fragment>
            <header className="Menu">
                
                <img className="Logo" src={require('../../images/Logo.png')} alt="logo"/>
                <Start></Start>
                <Register></Register>
                <Reservation></Reservation>
                <Gym></Gym>
                <Contact></Contact>
                
            </header>
        </Fragment>
    )
}

export default MainMenu;