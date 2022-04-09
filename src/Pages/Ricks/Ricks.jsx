import React , { useContext } from 'react';
import { AppContext } from '../../App/App.jsx'
import { API_URL } from '../../API';

function Ricks(){
    const { info , setCharacters } = useContext(AppContext);
    const ricks = [];
    for( let i=1 ; i<=info.count ; i++ ){
        fetch( `${API_URL}/${i}` )
        .then( res => res.json())
        .then( data => {
            if( data.name.includes('Rick') ) ricks.push(data);
        })
        .catch(error => console.log(error))
    }
    setCharacters(ricks);
    return(
        <div> xd</div>
    )
}

export { Ricks }