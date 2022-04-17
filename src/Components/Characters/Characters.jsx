import React, { Fragment, useContext } from 'react';
import { HomeContext } from '../../Pages/Home/Home.jsx';
import { Character } from '../Character/Character';
import './Characters.css';

function Characters(){
    const { characters , loading } = useContext(HomeContext);
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
                                id={character.id}
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