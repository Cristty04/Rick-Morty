import React from 'react'
import { Link } from 'react-router-dom'


const Navigator = ({ authenticated, LogoutUser }) => {
   return (
   <nav>
   <ul>
      <li><Link to= "/">Characters</Link></li>
      <li><Link to= "/">Location</Link></li>
      <li><Link to= "/gallery">Gallery</Link></li>
         {authenticated ?(
            <li>
               <button onClick={LogoutUser}>LogOut</button>
            </li>
      ): (
            <li> <Link to= "/login"> Login </Link> </li>
         )}
   </ul>
   </nav>
)
}


export default Navigator