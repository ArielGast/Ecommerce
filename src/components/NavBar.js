import React from 'react';
import { collection, getDocs, getFirestore} from 'firebase/firestore';
import './NavBar.css';
import { useContext, useEffect } from "react";
import { ProductContext } from "../context/productContext";
import  brand from './brand.png';
import  CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import ItemNav from './ItemNav';


function NavBar () {
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

    return (
        <nav className='navbar'>
            <div className='navbar-brand'>
            <Link to={`/`} className='brand-link'><img className='brand-image' src={brand} alt='brand'></img></Link>
            </div>
            <div className='itemNavbar'>
                {allCategories.map(cat => (
                        <ItemNav key={cat.id} item={cat} /> 
                ))}
            </div>
            <CartWidget />

        </nav>
    )
}

export default NavBar;
