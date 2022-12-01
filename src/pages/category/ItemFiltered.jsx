import React from "react";
import Card from "../../components//Card/Card";
import { useContext} from "react";
import { ProductContext } from "../../context/productContext";
import '../home/ItemList.css'

const ItemFiltered = () => {
    const {filteredProducts} = useContext(ProductContext);    
    return (
                
            <div className="list-container">
                {filteredProducts.map(product =>(
                <Card key={product.id} item={product} />
                ))}
            </div>
                )
}

export default ItemFiltered;