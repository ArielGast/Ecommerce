import React from "react";
import { useLocation } from "react-router-dom";
import Card from '../../components/Card/Card';
import ItemCount from "../../components//Cart/ItemCount";

const ItemDetail = () => {
    const { state } = useLocation();

    return (
        <div>
            <Card item={state} />
            <ItemCount item={state} />
        </div>
    )
}

export default ItemDetail ;