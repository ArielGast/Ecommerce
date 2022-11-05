import React from "react";
import './CartWidget.css'
function widget() {
    return (
        <div className='cart'>
            <i className="fa-solid fa-cart-shopping"></i>
            <span>0</span>
        </div>
    )
};

export default widget;