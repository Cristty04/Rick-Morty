import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Mortyf from '../assets/images/Mortyf.png';

const Navigator = ({ authenticated, LogoutUser }) => {
   return (
      
      <Nav>
      <img src={Mortyf} width= "180" height="150" className="MortyfLogo"
              alt="Mortyf Logo"></img>
         <button class= "Characters">
            <Link to= "/">Characters</Link>
         </button>
         <button class= "Location">
            <Link to= "/location">Location</Link>
         </button>
         <button class= "Gallery">
            <Link to= "/gallery">Gallery</Link>
         </button>
               {authenticated ?(
           
               <button class= "logout" onClick={LogoutUser}>LogOut</button>
            
      ): (
         <button class= "login">
             <Link to= "/login"> Login </Link> 
         </button>
         )}
      </Nav>
    
   
)
}


export default Navigator