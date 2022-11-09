import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Card from '../../components/Card';
import ItemCount from "../../components/ItemCount";

const ItemDetail = () => {
    const params = useParams();
    const { state } = useLocation();


    console.warn('params', params, 'state', state);
    return (
        <div>
            <Card item={state} />
            <ItemCount />
        </div>
    )
}

export default ItemDetail ;