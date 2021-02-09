import React from 'react';
import CardList from './RecommendedCardList';
import './CardLists.css'
import "./Trending.css";
import i1 from "./bhaktapur.jpg";
import i2 from "./pokhara.jpg";
import i3 from "./chitwan.jpg";
import destinations from './RecommendedCardData.json';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Recommended() {
        
    return (
        <div>
            <div className="mydiv">
                <div className="line" />          
                <h1 className="ht">Recommended</h1>  
                <div className="line" />          
            </div>
            <div>
                <CardList />
                    
                 
            </div>            
        </div>
    )
}

export default Recommended
