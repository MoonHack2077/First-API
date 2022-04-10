import React , { Fragment } from 'react';
import { Pagination } from '../../Components/Pagination/Pagination.jsx';
import { Characters } from '../../Components/Characters/Characters.jsx';

function Home(){
    return(
        <Fragment>
            <Pagination />
                <Characters />
            <Pagination />
        </Fragment>
    )
}

export { Home }