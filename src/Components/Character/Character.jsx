import React , { Fragment } from 'react';

function Character({ id , image, name , gender , origin , episode , status }){
    return(
         <Fragment>
             <li key={id} className="card-character" >
                <div className="character-img">
                    <img src={image} alt={name} />
                </div>
                <div className="character-info">
                    <ul>
                        <li>{name}</li>
                        <li>{status}</li>
                        <li>{gender}</li>
                        <li>{origin.name}</li>
                        <li>{episode.length}</li>
                    </ul>
                </div>
            </li> 
         </Fragment>
    )
}

export { Character }