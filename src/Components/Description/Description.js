import React from 'react';
import './Description.css';
import Profile from './profile.jpg';

function Description() {
    return (
        <div className="total">
        <a href name="Description"></a><div className="description">
            <div className="Words">
                <h2>Hi, I am  Emna Abdessalem,</h2>
                <h3>and I am a web developper !</h3>
            </div>
            <div className="Image">
                <img className="Emna" src={Profile} alt="Profile picture" />
            </div>
            
            </div>
           
            
        </div>
    )
}

export default Description
