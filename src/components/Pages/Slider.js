import React ,{useState} from 'react'
import "./Slider.scss"
import ImgComp from "./ImgComp"
import i1 from "./bhaktapur.jpg"
import i2 from "./pokhara.jpg"
import i3 from "./chitwan.jpg"

function Slider() {
    // array for images
    let sliderArr= [<ImgComp src={i1} txt="Bhaktapur Durbar Square"  > </ImgComp> ,
                        <ImgComp src={i2}  txt="Pokhara" ></ImgComp>,
                       <ImgComp src={i3}  txt="Chitwan NP" ></ImgComp>];
    
    const [x , setX]= useState(0);
    const goLeft = () => {
        
        x=== 0 ? setX(-100* (sliderArr.length - 1)) : setX(x+100);

        // setX(x + 100 ) ;
    };
    const goRight = () => {
        
        x=== -100* (sliderArr.length - 1) ? setX(0) : setX(x-100);
    };
    return (
        <div className="sh">
           
            <div className="slider">
            {
                
                sliderArr.map((item,index)=>{
                    return(
                        <div key={index} className="slide" style={{transform:  `translateX(${x}%) `}} > 
                            {item} 
                        </div>                         
                    )
                })
                 
                
            } 
             
            <button id="goLeft" onClick={goLeft}><i class="fas fa-chevron-circle-left"></i></button>
            <button id="goRight" onClick={goRight}><i class="fas fa-chevron-circle-right"></i></button>  
            </div>
            
        </div>
    )
}

export default Slider
