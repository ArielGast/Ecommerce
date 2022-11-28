import React from "react";
import ItemCollection from "./itemCollection"; 
import './ItemListContainer.css';

const ItemListContainer = () => {
    return (
        <div>
            <h1>Nuestro Catalogo</h1>
            <ItemCollection /> 
        </div>

    );
};

export default ItemListContainer;