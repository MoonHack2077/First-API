import React , { Fragment } from 'react';
import './Character.css';

function Character({ image, name }){
    return(
         <Fragment>
             <li key={name} className="card-character" style={{
                 backgroundImage: `url(${image})`
            }} >
                <div className='card-content'>
                    <div className='card-name-character'>
                        <p>{name}</p>
                    </div>
                    <button>Learn More</button>
                </div>
            </li> 
         </Fragment>
    )
}

export { Character }