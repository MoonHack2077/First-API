import React, { useContext } from 'react';
import { AppContext } from '../../App';
import './Characters.css';

function Characters(){
    const { characters } = useContext(AppContext);

    const mapeo = characters.map( character => {
        return (
            <li key={character.id} className="card-character" >
                <div className="character-img">
                    <img src={character.image} alt={character.name} />
                </div>
                <div className="character-info">
                    <ul>
                        <li>{character.name}</li>
                        <li>{character.status}</li>
                        <li>{character.gender}</li>
                        <li>{character.origin.name}</li>
                        <li>{character.episode.length}</li>
                    </ul>
                </div>
            </li>  
        )
    });

    return(
        <ul className="container-characters">
            { mapeo }
        </ul>
    )
}

export { Characters };