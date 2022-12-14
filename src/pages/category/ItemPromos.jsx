import React from "react";
import Card from "../../components/Card/Card";
import { useState, useContext, useEffect} from "react";
import { ProductContext } from "../../context/productContext";
import { collection, getDocs, getFirestore, where, query } from "firebase/firestore";
import Spinner from "../../components/Spinner";
const ItemPromos = () => {
    const {filteredProducts, setFilteredProducts} = useContext(ProductContext);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const q = query (
            collection(db, 'products'),
            where('price', '<', 4000)
        );
        getDocs(q).then((snapshot) =>{
            if (snapshot.size === 0) {
                return(
                    <h1>No hay productos en promoción</h1>
                )
            }
            const productsPromo = snapshot.docs.map((doc) =>({id: doc.id, ...doc.data()}))
            setFilteredProducts(productsPromo);
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            setLoading(false);
        });

    },[])

    return (
        <div>
            {loading ? (
                <Spinner />
            ) : (
                    <div className="container">
                        <h1 className="title">Choose the one you like the most!</h1>
                        <div className="list-container">
                            {filteredProducts.map(product =>(
                                <Card key={product.id} item={product} />
                            ))}
                        </div>
                    </div>
                
            )}

        </div>
    )
}

export default ItemPromos;