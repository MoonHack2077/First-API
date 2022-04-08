import React, { Fragment , useContext } from 'react';
import { AppContext } from '../../App/App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './Loading.css';

function Loading(){
    const { loading } = useContext(AppContext);

    return(
        <Fragment>
            { loading &&
                <div className='Loading-container' > 
                    <div className='Loading-message'>
                        <FontAwesomeIcon icon={ faSpinner } />
                    </div>
                </div> 
            }
        </Fragment>
    )
}

export { Loading }