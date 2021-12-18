import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">

            <div className="Name">
            Emna Abdessalem</div>

            <div className = "links">

            <a href = "#Description">About</a>
            <br/>

            <a href = "#Projects">Projects</a>
            <br/>

            <a href = "#Contacts">Contacts</a> 
            <br/>
            
            </div>
        </div>
    )
}

export default Navbar
