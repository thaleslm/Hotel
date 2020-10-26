
import React from 'react';



import './View.css'

function ViewPosition(){

    
    function start(){
        
        let Imagem =  document.querySelectorAll('.Transimages img'),
                Max = Imagem.length,
                index = 1,
                indexcurrent = 0;        
        
                
                setInterval(()=>{
                    if (index >= 1){
                         Imagem[indexcurrent].classList.remove("Select")
                        indexcurrent++
                            if(indexcurrent >= Max){
                                indexcurrent = 0
                            }
                    }
                    if(index >= Max){
                        index = 0;}
                    
                    Imagem[index].classList.add("Select")
                    index++
                
                },3000)
    }

    window.addEventListener("load", start)
      
                return(
                    <div className="View">
                    <div className="Title">
                        <h2>Imagens do Hotel</h2>
                    </div>
                    <div className="Transimages">
                        <img  className="Select" src={require('../../images/Hotel1.jpg')} alt="Fotos do Hotel"  />
                        <img  className=""src={require('../../images/Hotel2.jpg')} alt="Fotos do Hotel"  />
                        <img  className=""src={require('../../images/Hotel3.jpg')} alt="Fotos do Hotel"  />
                        <img  className=""src={require('../../images/Hotel4.jpg')} alt="Fotos do Hotel"  />
                        <img  className=""src={require('../../images/Hotel5.jpg')} alt="Fotos do Hotel"  />
                    </div>

                </div>
                )
   
}
export default ViewPosition;