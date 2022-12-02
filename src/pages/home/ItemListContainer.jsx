import React from "react";
import ItemCollection from "./itemCollection"; 
import './ItemListContainer.css';

const ItemListContainer = () => {
    return (
        <div>
            <h1>ALL OUR PRODUCTS</h1>
            <ItemCollection /> 
        </div>

    );
};

export default ItemListContainer;