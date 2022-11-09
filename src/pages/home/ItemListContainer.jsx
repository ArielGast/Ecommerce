import React from "react";
import ItemList from './ItemList';
import './ItemListContainer.css';

const ItemListContainer = () => {
    return (
        <div>
            <h1>Nuestro Catalogo</h1>
            <ItemList />
        </div>

    );
};

export default ItemListContainer;