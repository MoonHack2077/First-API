import React , { useContext } from 'react';
import { AppContext } from '../../App/App.jsx'
import { API_URL } from '../../API';
import { Characters } from '../../Components/Characters/Characters.jsx';

function Ricks(){
    const { info , setCharacters } = useContext(AppContext);
    const ricks = [];
    for( let i=1 ; i<=info.count ; i++ ){
        fetch( `${API_URL}/${i}` )
        .then( res => res.json())
        .then( data => {
            if( data.name.includes('Rick') ) ricks.push(data);
        })
        setCharacters(ricks);
    }
    return(
        <Characters />
    )
}

export { Ricks }