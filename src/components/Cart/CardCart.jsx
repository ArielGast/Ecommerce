import React from "react";
import '../Card/Card.css';
import { useContext } from "react";
import { ProductContext } from "../../context/productContext";

const CardCart = ({item}) => {
    const {cart, setCart} = useContext(ProductContext);
    const {wine, image, quantity, price,id} = item; 
    const Total = price*quantity;
    const handleRemove = () => {
        const newcart = cart.filter((ele) => ele.id !==id)
        setCart(newcart);
    }

    return (
            <div className="card">
                <div className="card-image-container">
                    <img className="card-image" src={image} alt={item.name} />
                </div>
                <div className="card-content">
                    <p className='card-name'>{wine}</p>
                    <p className='card-id'>Price: $ {price}</p> 
                    <p className='card-id'>Quantity: {quantity}</p>
                </div>
                <p className="importeItem">Total Item: $ {Total}</p>
                <div className="bottonContainer">
                    <button className="buttonRemove"onClick={handleRemove}>Remove</button>
                </div>
            </div>
    )
};

export default CardCart;