import React from "react";
import './CartWidget.css'
import count from "./ItemCount";

function widget() {
    return (
        <div className='cart'>
            <i className="fa-solid fa-cart-shopping"></i>
            <span>0</span>
        </div>
    )
};

export default widget;