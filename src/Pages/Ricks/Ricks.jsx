import React , { Fragment, useContext } from 'react';
import { AppContext } from '../../App/App.jsx';
import { Characters } from '../../Components/Characters/Characters.jsx';



function Ricks(){
    const { xd  } = useContext(AppContext);
    return(
        <Fragment>
        { xd() && <Characters /> }
        </Fragment>
    )
}

export { Ricks }