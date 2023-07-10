import React from "react";
import '../navbar/Navbar.css'
import {Link} from 'react-router-dom'

export const Navbar=()=>{
    return(
        <div className="qwerty">
         <Link to='/'>Home</Link>
             <Link to='/cart'>Cart</Link>
             <div className="popular">  <button className="tiktok"></button>
            <button className="tiktok"></button>
            <button className="tiktok"></button></div>
          
        </div>
    
    )
}


