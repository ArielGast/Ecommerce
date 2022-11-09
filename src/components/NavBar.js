import React from 'react';
import './NavBar.css';
import  brand from './brand.png';
import  CartWidget from './CartWidget';



function NavBar () {
    return (
        <nav className="navbar">
            <div className='navbar-nav'>
                <img className='brand-image' src={brand} alt='brand image'></img>
                <ul className='navbar__ul'>
                    <li className='itemNavbar'><a href="#"><i className="fa-solid fa-house menu-icon"></i></a>
                        <span className='nav-title'>Mostrador</span>
                    </li>
                    <li className='itemNavbar'><a href="#"><i className="fa-solid fa-pizza-slice menu-icon"></i></a>
                        <span className='nav-title'>Pizzas</span>
                    </li>
                    <li className='itemNavbar'><a href="#"><i className="fa-solid fa-burger menu-icon"></i></a>
                        <span className='nav-title'>Hamburguesas</span>
                    </li>
                    <li className='itemNavbar'><a href="#"><i className="fa-solid fa-message menu-icon"></i></a>
                        <span className='nav-title'>Contacto</span>      
                    </li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;
