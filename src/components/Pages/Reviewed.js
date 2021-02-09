import React from 'react'
import '../../App.css'
import CardList from './ReviewedCardList'
import Footer from "../Footer";
export default function Reviewed() {
    return(
        <>
            
            <div>
            <div className="mydiv">
                <div className="line" />          
                <h1 className="ht">Reviewed</h1>  
                <div className="line" />          
            </div>
            <div>
                <CardList />
                    
                 
            </div>  
            <Footer />          
        </div>
        <Footer /> 
        </>    
    )
}
