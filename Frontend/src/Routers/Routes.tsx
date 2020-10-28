import React from 'react';
import {BrowserRouter, Switch, Route}from 'react-router-dom'
import Main from '../Main/Main'
import Login from '../Login/Login';
import  Register from '../Register/Register'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/Register" component={Register} />
                <Route path="/Login" component={Login}/>
                
                
            </Switch>
        
        </BrowserRouter>
    )
}

export default Routes;