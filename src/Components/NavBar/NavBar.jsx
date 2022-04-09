import React from 'react';
import './NavBar.css';

function NavBar(){
    return(
        <nav>
            <div className="container-left">
                <a href="/">Rick and Morty API</a>
            </div>
            <div className="container-right">
                <a href="/Ricks">Ricks</a>
                <a href="/Mortys">Mortys</a>
            </div>
        </nav>
    )
}

export { NavBar };