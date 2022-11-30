import React from "react";
import './ItemNav.css';
import {useContext} from 'react';
import { useNavigate } from "react-router-dom";
import { ProductContext} from '../context/productContext';
import '../pages/home/ItemList.css';

function ItemNav ({item}) {
    const {allProducts, setAllProducts} = useContext(ProductContext);
    const {filteredProducts, setFilteredProducts} = useContext(ProductContext);
    const {name, image} = item;
    const navigate = useNavigate();
    const handleMenu = () => {
        navigate(`/Category/${name}`, { state: item });
        const result = allProducts.filter((data) => data.categoryid == item.id)
        setFilteredProducts(result);
    }

    return (
        <div className='itemMenu' onClick={handleMenu}>
            <div className="itemNav">
                <div className="imageContainer">
                    <img  className="menuImage" src={image} alt={item.name} />
                </div>
                <div className="containerItemName">
                    <p className="itemName">{name}</p>
                </div>
            </div>
        </div>
    )
};

export default ItemNav;