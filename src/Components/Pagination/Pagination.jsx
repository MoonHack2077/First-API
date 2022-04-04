import React, { useContext } from 'react';
import { AppContext } from '../../App';

function Pagination(){
    const { info , onPrev , onNext } = useContext(AppContext);

    return(
        <ul>
            { info.prev ?  <li> <button onClick={onPrev} >Prev </button> </li> : null }
            { info.next ?  <li> <button onClick={onNext} >Next </button> </li> : null }            
        </ul>
    )
}

export { Pagination }