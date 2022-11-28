import React from "react";
import { useEffect, useState, useContext} from "react";
import { collection, getDocs, getFirestore} from 'firebase/firestore';
import './ItemList.css';
import Spinner from '../../components/Spinner/index';
import Card from '../../components/Card';
import { ProductContext } from "../../context/productContext";

const ItemCollection = () => {

    const {allProducts, setAllProducts} = useContext(ProductContext); 
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const db = getFirestore();
        const productsCollection = collection(db,'products');
        getDocs(productsCollection).then(snapshot => {
            setLoading(true);
            const products = snapshot.docs.map((doc) =>({id: doc.id, ...doc.data() }));
            setAllProducts(products);      
        }).catch((err) => {
            console.log(err);
        }).finally(() => {
            setLoading(false);
        });
    
    }, []);
    return (
        <div>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <div className="list-container">
                        {allProducts.map(product =>(
                            <Card key={product.id} item={product} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );

}

export default ItemCollection;