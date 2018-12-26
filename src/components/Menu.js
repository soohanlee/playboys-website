import React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/menu.scss'
const Menu = () => {
 
    return (
        <ul>
            <li><NavLink exact to="/About" className="link" >About</NavLink></li>
            <li><NavLink exact to="/Player" className="link" >player</NavLink></li>
            <li><NavLink exact to="/Account" className="link" >account</NavLink></li>
        </ul>
    );
};

export default Menu;