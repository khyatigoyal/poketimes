import React from 'react';
import {NavLink} from 'react-router-dom';
const Navbar = () => {
    
    return(
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <a  href="/"className="brand-logo">Poke'times</a>
                <ul className="right">
                  <li>  <NavLink to="./Home" >Home</NavLink></li>
                  <li>  <NavLink to="./About" >About</NavLink></li>
                  <li>  <NavLink to="./Contact" >Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;
