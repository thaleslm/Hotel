import React from 'react';
import {BrowserRouter, Switch, Route}from 'react-router-dom'
import Main from '../Main/Main'
import  Register from '../Register/Register'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/Register" component={Register} />
                
                
            </Switch>
        
        </BrowserRouter>
    )
}

export default Routes;