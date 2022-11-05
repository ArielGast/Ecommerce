import React from 'react';
import './NavBar.css';
import  brand from './brand.png';
import  CartWidget from './CartWidget';



function NavBar () {
    return (
        <nav className="navbar">
            <img className='brand-image' src={brand} alt='brand image'></img>
            <div className='navbar-nav'>
                <ul className='navbar__ul'>
                    <li className='itemNavbar'><a href="#">Servidores<i className="fa-solid fa-server menu-icon"></i></a></li>
                    <li className='itemNavbar'><a href="#">APIs<i className="fa-solid fa-terminal menu-icon"></i></a></li>
                    <li className='itemNavbar'><a href="#">Cloud Computing<i className="fa-solid fa-cloud menu-icon"></i></a></li>
                    <li className='itemNavbar'><a href="#">Contacto<i className="fa-solid fa-message menu-icon"></i></a></li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;
