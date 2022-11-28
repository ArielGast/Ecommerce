import React from "react";
import Card from "../../components/Card";
import Spinner from "../../components/Spinner";
import { useContext} from "react";
import { ProductContext } from "../../context/productContext";
import '../home/ItemList.css'

const ItemFiltered = () => {
    const {filteredProducts, setFilteredProducts} = useContext(ProductContext);    
    const {loading, setLoading} = useContext(ProductContext);
    return (
        <div>
             {loading ? (
                <Spinner />
            ) : (
                <>
                    <div className="list-container">
                        {filteredProducts.map(product =>(
                            <Card key={product.id} item={product} />
                        ))}
                    </div>
                </>
            )} 

        </div>

    )
}

export default ItemFiltered;