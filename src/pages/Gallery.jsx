import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Gallery = () => {
  
  const [episodes, setEpisodes] = useState([])


  useEffect(()=>{
    const getEpisodes = async()=>{
      const episodesAPI = await axios.get(
        "https://rickandmortyapi.com/api/episode"
        )
        setEpisodes(episodesAPI.data.results);
    }
    getEpisodes()
  },[])

  return (
    <div> EPISODIOS
    {episodes.length ? (
      <>
      {episodes.map((episodes)=>(
        <div key={episodes._id}>{episodes.name}, {episodes.air_date}, {episodes.episode}</div>
      ))}
      </>
    ) : (
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqTF76GK0KpGMxHEySHuVxmKHpJl6JVfnzKQ&usqp=CAU' alt=''/>
      
    )}
      
      
    </div>
  )
}

export default Gallery
