import React from 'react';
import './NavBar.css';
import  brand from './brand.png';
import  CartWidget from './CartWidget';
import { Link } from 'react-router-dom';




function NavBar () {
    return (
        <nav className="navbar">
            <div className='navbar-nav'>
                <div className='wrapper'>
                    <Link to={`/`}><img className='brand-image' src={brand} alt='brand'></img></Link>
                </div> 
                
                <ul className='navbar__ul'>
                    <li className='itemNavbar'><Link to={`/`} className='nav-link'><i className="fa-solid fa-house menu-icon"></i>
                        <span className='nav-title'>Mostrador</span></Link>
                    </li>
                    <li className='itemNavbar'><Link to={`/`} className='nav-link'><i className="fa-solid fa-pizza-slice menu-icon"></i>
                        <span className='nav-title'>Pizzas</span></Link>
                    </li>
                    <li className='itemNavbar'><Link to={`/`} className='nav-link'><i className="fa-solid fa-burger menu-icon"></i>
                        <span className='nav-title'>Hamburguesas</span></Link>
                    </li>
                    <li className='itemNavbar'><Link to={`/`} className='nav-link'><i className="fa-solid fa-message menu-icon"></i>
                        <span className='nav-title'>Contacto</span></Link>      
                    </li>
                </ul>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;
