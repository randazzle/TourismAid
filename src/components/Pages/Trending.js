import React from 'react';
import './Trending.css';
import i1 from "./bhaktapur.jpg"
import CardList from './TrendingCardList';

function Trending() {
    // array for images
    // let cardArr= [<cardComp src={i1} txt="Bhaktapur Durbar Square"  > </cardComp> ,
    //                     <cardComp src={i2}  txt="Pokhara" ></cardComp>,
    //                    <cardComp src={i3}  txt="Chitwan NP" ></cardComp>];
     return (
        <div>
            <div className="mydiv">
            <div className="line" />

           
                <h1 className="ht">Trending</h1>  
                <div className="line" />

               
                
            </div>
            <div>
                <CardList />
                    
                 
            </div>    
        </div>
    )
}

export default Trending
