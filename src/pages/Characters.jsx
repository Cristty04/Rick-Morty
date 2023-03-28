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
                <p key={character.id}>{character.name}</p>
               
                
                


            ))} 
           </>
        ) : (
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"></img>
        )}

        </div>
    )
}



export default Characters