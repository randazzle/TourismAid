import React from 'react'
import './CardImages.css'
function CardImages({ src , txt }) {
    return (
        <div>
            <a href="#">
                
                <div className="container">
                    
                    <img className="z" src={src}  ></img>
                    <div className="overlay">    
                        <h1 className="icon"><i class="fas fa-arrow-alt-circle-up"></i></h1>
                    </div>
                </div>
                <h1 className="tit">{txt}</h1>
                </a>
            
           
        </div>
    )
}

export default CardImages
