import React, { Fragment , useContext } from 'react';
import { AppContext } from '../../App/App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './Modal.css';

function Modal(){
    const { loading } = useContext(AppContext);

    return(
        <Fragment>
            { loading &&
                <div className='Modal-container' > 
                    <div className='Modal-message'>
                        <FontAwesomeIcon icon={ faSpinner } />
                    </div>
                </div> 
            }
        </Fragment>
    )
}

export { Modal }