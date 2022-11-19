import React, {useEffect, useState, useRef} from "react";
import Card from '../../components/Card';
import './ItemList.css';
import Spinner from '../../components/Spinner/index';

const ItemList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const startProduct = useRef(1);
    const endProduct = useRef(20);

    const getProducts = async (start ='1', end = '20') => {
        try {
            setLoading(true);
            const promises = [];
           for (let i = start; i<= end; i++) {
                promises.push(fetch(`https://api.sampleapis.com/wines/rose/${i}`).then(resp => resp.json()));
            } 
            const results = await Promise.all(promises);
            setProducts(results);

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        getProducts(startProduct.current, endProduct.current);
    }, [])

    const handleNext = async () => {
        startProduct.current += 20;
        endProduct.current += 20;
        getProducts(startProduct.current, endProduct.current);
    }

    const handlePrev = async () => {
        startProduct.current -= 20;
        endProduct.current -= 20;
        getProducts(startProduct.current, endProduct.current);
    }    
    return (
        <div>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <div className="list-container">
                        {products.map(product =>(
                            <Card key={product.id} item={product} />
                        ))}
                    </div>
                    <div className="button-container">
                    <button disabled={startProduct.current <= 1 || loading} onClick={handlePrev}>Previous</button>
                    <button disabled={endProduct.current >= 300 || loading}  onClick={handleNext}>Next</button>
                </div>
                </>
            )}
        </div>
    );
};

export default ItemList;