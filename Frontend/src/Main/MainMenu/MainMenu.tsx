import React, { Fragment } from 'react';

import './MainMenu.css';
import Start from './Components/Start';

import Contact from './Components/Contact'
import Register from './Components/Register'
import Login from './Components/Login';


function MainMenu (){
    return(
        <Fragment>
            <header className="Menu">
                
                <img className="Logo" src={require('../../images/Logo.png')} alt="logo"/>
                <Start></Start>
                <Register></Register>
                <Login></Login>
                
                <Contact></Contact>
                
            </header>
        </Fragment>
    )
}

export default MainMenu;