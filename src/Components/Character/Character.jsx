import React , { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import './Character.css';

function Character({ image, name }){
    const navigate = useNavigate()
    return(
         <Fragment>
             <li key={name} className="card-character" style={{
                 backgroundImage: `url(${image})`
            }} >
                <div className='card-content'>
                    <div className='card-name-character'>
                        <p>{name}</p>
                    </div>
                    <button onClick={()=>navigate('/profile')} >Learn More</button>
                </div>
            </li> 
         </Fragment>
    )
}

export { Character }