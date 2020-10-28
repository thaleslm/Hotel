import React from 'react';
import './Main.css'

import MainMenu from './MainMenu/MainMenu' 
import ViewPosition from './View/View'


function Main(){
    return(
        <div className="Main">
      <MainMenu></MainMenu>
      <ViewPosition  ></ViewPosition>
   

    </div>
    )
}
export default Main;