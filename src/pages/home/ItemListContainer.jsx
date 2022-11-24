import React from "react";
/* import ItemList from './ItemList'; */
import ItemListFirebase from "./itemCollection"; 
import './ItemListContainer.css';

const ItemListContainer = () => {
    return (
        <div>
            <h1>Nuestro Catalogo</h1>
            <ItemListFirebase /> 
        </div>

    );
};

export default ItemListContainer;