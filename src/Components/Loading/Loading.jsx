import React, { Fragment , useContext } from 'react';
import { HomeContext } from '../../Pages/Home/Home.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './Loading.css';

function Loading(){
    const { loading } = useContext(HomeContext);

    return(
        <Fragment>
            { loading &&
                <div className='Loading-container' > 
                    <div className='Loading-icon-container'>
                        <FontAwesomeIcon icon={ faSpinner } />
                    </div>
                </div> 
            }
        </Fragment>
    )
}

export { Loading }