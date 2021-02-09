import React from 'react'
import '../../App.css'

import Footer from "../Footer";
import Slider from "./Slider";
import "./Slider.scss"
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Bhaktapur from './bhaktapur.jpg'
import Chitwan from './chitwan.jpg'
import Pokhara from './pokhara.jpg'
import './home.css'
import CardSection from './CardSection';


export default function Home() {
    
           
         return(
            <>
                
                <Slider />
                <p className="pa">
                ‘Tourism-Aid’
                <br/>
                We are a main online travel Recomender in Nepal giving a ‘best as far as class can tell with the objective to be ‘ Nepal ‘s Travel Recomender’. Through our site, www.TourismAid.com, our versatile applications and our other related stages, recreation and business voyagers can choose from different beautiful places in nepal taking into account their movement needs.

            </p>
                <CardSection />

                <Footer />
            </>    
       
        )
}    
            

