import React from 'react';
import './Main.css'

import MainMenu from './MainMenu/MainMenu' 
import ViewPosition from './View/View'
import Footer from './Footer/Footer'

function Main(){
    return(
        <div className="Main">
      <MainMenu></MainMenu>
      <ViewPosition  ></ViewPosition>
      <Footer></Footer>

    </div>
    )
}
export default Main;