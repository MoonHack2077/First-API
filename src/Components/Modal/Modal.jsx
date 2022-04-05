import React, { Fragment , useContext } from 'react';
import { AppContext } from '../../App';
import './Modal.css';

function Modal(){
    const { loading } = useContext(AppContext);

    return(
        <Fragment>
            { loading ?
                <div className='Modal-loading' > 
                    <div className='Modal-message'>
                        <p> Loading </p> 
                    </div>
                </div> 
             : null }
        </Fragment>
    )
}

export { Modal }