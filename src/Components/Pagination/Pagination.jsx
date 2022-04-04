import React, { useContext } from 'react';
import { AppContext } from '../../App';
import './Pagination.css'

function Pagination(){
    const { info , onPrev , onNext } = useContext(AppContext);

    return(
        <ul className='pagination-container'>
            { info.prev ?  <li> <button onClick={onPrev} >Prev </button> </li> : null }
            { info.next ?  <li> <button onClick={onNext} >Next </button> </li> : null }            
        </ul>
    )
}

export { Pagination }