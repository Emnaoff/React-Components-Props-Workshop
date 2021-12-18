import React from 'react';
import './Projects.css';
import proj1 from '../../Assets/proj1.jpg';
import proj2 from '../../Assets/proj2.jpg';
import proj3 from '../../Assets/proj3.jpg';
import proj4 from '../../Assets/proj4.jpg';


function Projects() {
    return (
        <div className="projects">
            <a href name="Projects"><h1>Projects</h1></a>
            <br/>
            <div className="Photos">
                <div className="box1">
                <img className="p1" src = {proj1} alt="proj1" />
                <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
                   Declarative views make your code more predictable and easier to debug.</p>
                   <a href="https://github.com/">GitHub Link.</a>
                </div>
                <div className="box2">
                <img className="p2" src = {proj2} alt="proj2" />
                <p>Components are the building blocks of any React app and a typical React app will have many of these. Simply put, a component is a JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear.</p>
                <a href="https://github.com/">GitHub Link.</a>
                </div>
                <div className="box3">
                <img className="p3" src = {proj3} alt="proj3" />
                <p>React allows us to pass information to a Component using something called props (stands for properties). Props are basically kind of global variable or object</p>
                <a href="https://github.com/">GitHub Link.</a>
                </div>
                <div className="box4">
                <img className="p4" src = {proj4} alt="proj4" />
                <p>CSS is the language we use to style an HTML document.CSS describes how HTML elements should be displayed.This tutorial will teach you CSS from basic to advanced.</p>
                <a href="https://github.com/">GitHub Link.</a>
                </div>
            </div>

            
        </div>
    )
}

export default Projects
