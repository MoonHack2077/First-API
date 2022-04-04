import React from 'react';
import './NavBar.css';

function NavBar(){
    return(
        <nav>
            <div className="container">
                <a href="/">Rick and Morty API</a>
            </div>
        </nav>
    )
}

export { NavBar };