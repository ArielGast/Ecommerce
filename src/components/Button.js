import React from "react";
import './ItemCount.css';

const Button = (props) => {
    return (
        <button className="button-prn">{props.name}</button>
    );
};

export default Button;