import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Navbar, Nav} from 'react-bootstrap';
import Mortyf from '../assets/images/Mortyf.png'

const Navigator = ({ authenticated, LogoutUser }) => {
   return (
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href='#home'>
         <img src={Mortyf} width= "170" height="100" className="MortyfLogo"
              alt="Mortyf Logo"></img>
      </Navbar.Brand>
      <Nav>
      <Link to= "/">Characters</Link>
      <Link to= "/">Location</Link>
      <Link to= "/gallery">Gallery</Link>
         {authenticated ?(
           
               <button onClick={LogoutUser}>LogOut</button>
            
      ): (
             <Link to= "/login"> Login </Link> 
         )}
   </Nav>
   </Navbar>
)
}


export default Navigator