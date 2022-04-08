import React, { Fragment , useContext } from 'react';
// import { } from 'react-router-dom';
import { AppContext } from '../../App/App.jsx';
import { Character } from '../Character/Character';
import './Characters.css';

function Characters(){
    const { characters , loading } = useContext(AppContext);

    return(
        <Fragment>
            { !loading && 
                <ul className="container-characters">
                    { characters.map( character => {
                        return (
                            <Character 
                                id={character.id}
                                name={character.name}
                                status={character.status}
                                gender={character.gender}
                                origin={character.origin}
                                image={character.image}
                                episode={character.episode}
                             />
                        )
                    }) 
                }
                </ul> 
            }
        </Fragment>
        
    )
}

export { Characters };