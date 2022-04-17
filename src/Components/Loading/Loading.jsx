import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './Loading.css';

function Loading({ loading }){
    return(
        <Fragment>
            { loading &&
                <div className='Modal-container' > 
                    <div className='Loading-icon-container'>
                        <FontAwesomeIcon icon={ faSpinner } />
                    </div>
                </div> 
            }
        </Fragment>
    )
}

export { Loading }