import React from "react";
import { useContext } from "react";
import { ProductContext } from "../context/productContext";
import './CartWidget.css'
import cartImage from "./shopping_cart.png"
import {useNavigate} from "react-router-dom";

function CartWidget() {
    const navigate = useNavigate();
    const {cart, setCart} = useContext(ProductContext)
     const handleCart = () => {
        navigate(`/checkout`);
     }
    return (
        <>
            <div className='cart'>
                <div className="cartQtyContainer">
                    <span className="cartQty">{cart.length}</span>
                </div>
                <div className="cartImageContainer" onClick={handleCart}>
                    <img className="image-cart" src={cartImage} alt="shopping cart"></img>
                </div>
            </div>
            
        </>
    )
};

export default CartWidget;