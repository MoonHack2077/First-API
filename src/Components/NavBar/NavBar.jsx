import React from 'react';
//import { BrowserRouter as Link  } from 'react-router-dom';
import './NavBar.css';

function NavBar(){
    return(
        <nav>
            <div className="container-left">
                <a href="/">Rick and Morty API</a>
            </div>
        </nav>
    )
}

export { NavBar };