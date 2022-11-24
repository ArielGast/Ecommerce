import React from 'react';
import './NavBar.css';
import  brand from './brand.png';
import  home from './home.png';
import  red from './red.png';
import  white from './white.png';
import  rose from './rose.png';
import  sparkling from './sparkling.png';
import  CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


function NavBar () {
    return (
        <nav className="navbar">
            <div className='navbar-brand'>
                <Link to={`/`} className='brand-link'><img className='brand-image' src={brand} alt='brand'></img></Link>
            </div>
            <ul className='navbar__ul'>
                <li className='itemNavbar'><Link to={`/`} className='nav-link'><img className='menu-image' src={home} alt='Grapes and glass of Wine'></img>
                    <span className='nav-title'>Home</span></Link>
                </li>
                <li className='itemNavbar'><Link to={`/`} className='nav-link'><img className='menu-image' src={red} alt='Glass of Red Wine'></img>
                    <span className='nav-title'>Red</span></Link>
                </li>
                <li className='itemNavbar'><Link to={`/`} className='nav-link'><img className='menu-image' src={white} alt=' Glass of White Wine'></img>
                    <span className='nav-title'>Rose</span></Link>
                </li>
                <li className='itemNavbar'><Link to={`/`} className='nav-link'><img className='menu-image' src={rose} alt=' Glass of Rose Wine'></img>
                    <span className='nav-title'>White</span></Link>      
                </li>
                <li className='itemNavbar'><Link to={`/`} className='nav-link'><img className='menu-image' src={sparkling} alt=' Glass of Sparkling Wine'></img>
                    <span className='nav-title'>Sparkling</span></Link>      
                </li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar;
