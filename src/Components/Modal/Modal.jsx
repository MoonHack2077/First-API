import React, { Fragment , useContext } from 'react';
import { AppContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './Modal.css';

function Modal(){
    const { loading } = useContext(AppContext);

    return(
        <Fragment>
            { loading ?
                <div className='Modal-loading' > 
                    <div className='Modal-message'>
                        <p> Loading </p> 
                        <FontAwesomeIcon className='icon' icon={ faSpinner } />
                    </div>
                </div> 
             : null }
        </Fragment>
    )
}

export { Modal }