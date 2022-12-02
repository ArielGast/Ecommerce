import React from "react";
import Card from "../../components//Card/Card";
import { useContext} from "react";
import { ProductContext } from "../../context/productContext";
import '../home/ItemList.css'

const ItemFiltered = () => {
    const {filteredProducts , allCategories} = useContext(ProductContext);
    return (
        <div className="container">
            <h1 className="title">Choose the one you like the most!</h1>
            <div className="list-container">
                {filteredProducts.map(product =>(
                <Card key={product.id} item={product} />
                ))}
            </div>
        </div>
                
    )
}

export default ItemFiltered;