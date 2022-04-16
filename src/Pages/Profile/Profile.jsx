import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacter } from '../../Services/API.js';

function Profile(  ){
    const [ character , setCharacter ] = useState({});
    const { characterId } = useParams(); 
    
    const fetchData = () =>{
        //setLoading(true)

        //SetTimeout to do the loading effect more durable
        setTimeout(()=>{
            getCharacter(characterId)
            .then(response =>{
                setCharacter(response)
                //setInfo(response.info)
                //setLoading(false);
            })
            .catch(console.log)

        },1000)
    }

    useEffect(()=>{
        fetchData()
    })
    return(
        <ul>
            <li>{character.name}</li>
            <li>{character.name}</li>
            <li>{character.name}</li>
            <li>{character.name}</li>
            <li>{character.name}</li>
        </ul>
    )
}

export { Profile }