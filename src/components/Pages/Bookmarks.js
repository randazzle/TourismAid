import React from 'react'
import '../../App.css'
import './Pages.css'
import CardList from './BookmarksCardList';
import Footer from "../Footer";
export default function Bookmarks() {
    return(
        <div>
            <div className="mydiv">
                <div className="line" />          
                <h1 className="ht">Bookmarked</h1>  
                <div className="line" />          
            </div>
            <div>
                <CardList />
                    
                 
            </div>  
            <Footer />          
        </div>
    )
}
