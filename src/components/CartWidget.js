import React from "react";
import { useContext } from "react";
import { ProductContext } from "../context/productContext";
import './CartWidget.css'
import cartImage from "./shopping_cart.png"


function CartWidget() {
    const {cart, setCart} = useContext(ProductContext)
    return (
        <div className='cart'>
            <img className="image-cart" src={cartImage} alt="shopping cart"></img>
            <span>{cart.length}</span>
        </div>
    )
};

export default CartWidget;