import React, { Fragment , useContext } from 'react';
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
                                key={character.id}
                                name={character.name}
                                image={character.image}
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