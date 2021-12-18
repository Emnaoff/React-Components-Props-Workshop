import React from 'react';
import './Contacts.css';

function Contacts() {
    return (
        <div className="Main">

       <a href name="Contacts"><h2 className="contact">How to contact me ? </h2></a>

       <div className="fullname">
           Fullnamme:
           </div>
<div className="enter1">Please enter your fullname here</div>
       

       <div className="email">
           E-Mail:
           </div>
<div className="enter2">Please enter your email here</div>
       

       <div className="msg">
           Message:
           </div>
           <div className="enter3">
<p className="message">Please write your message here</p>
</div>
<br/>

       <div className="send">Send</div>
        </div>
    )
}

export default Contacts
