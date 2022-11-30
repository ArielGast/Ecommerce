import React from 'react';
import { collection, getDocs, getFirestore} from 'firebase/firestore';
import './NavBar.css';
import { useContext, useEffect } from "react";
import { ProductContext } from "../context/productContext";
import fondo from './fondo-nav.jpg'
import  CartWidget from './CartWidget';
import { useNavigate } from 'react-router-dom';
import ItemNav from './ItemNav';

function NavBar () {
    const navigate = useNavigate();
    const {allCategories, setAllCategories} = useContext(ProductContext);
    useEffect (() =>{
        const db = getFirestore();
        const categoryCollection = collection(db, 'category');
        getDocs(categoryCollection).then(snapshot => {
            if (snapshot.size === 0) {
                console.log('No results');
            }
            const category = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
            setAllCategories(category);
        }).catch((err) => {
            console.log(err)
        });
    },[])

    const handleList = () =>{
        navigate(`/`);
    }
    const hadlePromo = () => {
        navigate(`/Promos`);
    }

    return (
        <nav className='navbar'>
            <div className='navbar-brand'>
            <img onClick={handleList} className='brand-image' src={fondo} alt='brand'></img>
            <p className='titleBrand'>Wine Store</p>
            </div>
            <div className='itemNavbar'>
                {allCategories.map(cat => (
                        <ItemNav key={cat.id} item={cat} /> 
                ))}
                <p className='itemPromoNavbar' onClick={hadlePromo}>Promos</p>
            </div>
            <CartWidget />

        </nav>
    )
}

export default NavBar;
