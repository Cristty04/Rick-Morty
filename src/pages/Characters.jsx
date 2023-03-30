import  { useEffect, useState } from 'react'
import axios from 'axios'

const Characters = () => {

    const [characters, setCharacters] = useState([])

    useEffect (()=>{
        const getCharacter = async () =>{
          const charactersAPI = await axios.get(
            "https://rickandmortyapi.com/api/character"
          )

        setCharacters(charactersAPI.data.results);
        }
        
       getCharacter()

    },[])

    return (
        <div>
          {characters.length ? (
            <>
           {characters.map((character)=>(
                <div key={character.id}> 
                <img src={character.image} alt=''/>
                {character.name}
                </div>
            ))} 
           </>
        ) : (
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqTF76GK0KpGMxHEySHuVxmKHpJl6JVfnzKQ&usqp=CAU" alt=''/>
        )}

        </div>
    )
}



export default Characters