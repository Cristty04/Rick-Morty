import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Location = () => {

    const [locations, setLocations] = useState([])

    useEffect(() => {
        const getLocation = async () =>{
            const locationsAPI = await axios.get(
                "https://rickandmortyapi.com/api/location"
            )
           setLocations(locationsAPI.data.results);

            }

           getLocation()
    
    }, [])
    
     return (
        <div class= "loc">
          {locations.map((location)=>(
            <p key={location.id}>{location.name}</p>
          ))}
        </div>
  )
}

export default Location