
import React, { useState }  from 'react';
import logo from './logo.png';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import './stylenavbar.css'
// import Home from '../Pages/Home'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

 function Navbar() {
    const [open, setOpen] = useState(false); // for burger menu
    const [dropdown, setDropdown] = useState(false); // for drop down
    
    
          
    return(
        <>
                   
                    
             <nav className="navbar" >
                                                   
                {/* <a href="#" className="navbarlogo" >
                            <img src={logo} alt="Logo" height={45} />
                    </a> */}
                    <div className="logo"><a href="home"  >
                            <img src={logo} alt="Logo" height={45}   />
                    </a></div>
                    {/* <div className="pannel"> */}
                        
                        <ul className="pannel">
                            
                        <li>
                                <div className="arrangelogo">
                                            
                                    <input  className="search"  placeholder=" Where to...?"></input>
                                    <a href="#" className="b"  >
                                        <i class="fas fa-search-location"></i>
                                    </a>  
                                </div>
                            </li>
                        <li><ul className="nav-links" style={{transform: open ?"translateY(0px)" : "" }}>   
                            
                            
                            <li><a href="home" className="a"  >
                                Home
                            </a></li>
                            {/* <li><a href="#" className="a"  >
                                Destinations 
                            </a> </li>                                    */}
                            {/* <li><a href="recomendations" className="a"  >
                                    Recomendations
                            </a></li> */}
                            <li>
                                <a href="bookmarks" className="a"  >
                                    Bookmarks 
                                </a>
                                
                            </li>
                            <li>
                                <a href="reviewed" className="a"  >
                                    Reviewed 
                                </a>
                                
                            </li>
                            {/* <li>
                                <a href="aboutUs" className="a"  >
                                    AboutUs 
                                </a>
                                
                            </li> */}
                            <li>
                                <a href="intro" className="a"  >
                                    <i class="fas fa-sign-out-alt"></i> 
                                </a>
                                
                            </li>
                                        
                        </ul></li>
                        
                        </ul>   
                        
                        <i onClick={() =>setOpen(!open)} className="fas fa-bars burger" ></i> 
                    {/* </div> */}
                    
                                       
                                                                               
            </nav>
           
        </>    
            )  
    }

export default Navbar
