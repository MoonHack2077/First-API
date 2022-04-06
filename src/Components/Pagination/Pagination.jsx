import React, { Fragment , useContext } from 'react';
import { AppContext } from '../../App';
import './Pagination.css'

function Pagination(){
    const { info , onPrev , onNext , loading } = useContext(AppContext);

    return(
        <Fragment>
            {!loading && 
                <ul className='pagination-container'>
                    { info.prev ?  <li> <button onClick={onPrev} >Prev </button> </li> : null }
                    { info.next ?  <li> <button onClick={onNext} >Next </button> </li> : null }            
                </ul>
            }
        </Fragment>
    )
}

export { Pagination }