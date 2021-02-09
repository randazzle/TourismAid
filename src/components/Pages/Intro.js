import React from 'react'
import Footer from "../Footer";
// import Home from './Home'
import   './Intro.css'
import logo from './logo.png';
function Intro (){
    return(
        <>
        <div ><a href="home"  >
                            <img className="mid" src={logo} alt="Logo" height={45}   />
        </a></div>
        <div className="bg">
           <h1>    </h1>
             <div className="box"> 
                
                
             
                <ul className="space">
                    <li className="buttons" ><a href="signup">SignUp</a></li>
                    <div className="d" />
                    <li className="buttons" ><a href="login">LogIn</a></li>
                    <div className="d" />
                    {/* <li className="buttons" ><a href="home"> Skip>>  </a></li> */}
                </ul>
            </div>
         </ div>
         <p className="pi">
                
                <br/>
                We are a main online travel Recomender in Nepal giving a ‘best as far as class can tell with the objective to be ‘ Nepal ‘s Travel Recomender’. Through our site, www.TourismAid.com, our versatile applications and our other related stages, recreation and business voyagers can choose from different beautiful places in nepal taking into account their movement needs.

            </p>
            <ul>
               <li className="go"> <a className="th" href="home">Go To Home Page</a></li>
            </ul>
         <Footer />
    
    </>)
}
export default Intro;