import React from "react";
import { useNavigate } from "react-router-dom";
import './Card.css';

const Card = ({item}) => {
    const { id, wine, image, winery, location, price,stock} = item;
    const navigate = useNavigate();
    const handleDetail = () => {
        navigate(`/category/${id}`, { state: item });
    }
    return (
        <div onClick={handleDetail} className="card">
            <div className="card-image-container">
                <img className="card-image" src={image} alt={item.name} />
            </div>
            <div className="card-content">
                <p className='card-name'>{wine}</p>
                <p className='card-description'> Winery: {winery}</p>
                <p className='card-price'>Origin: {location}</p>
                <p className='card-id'>Price: $ {price}</p> 
                <p className='card-id'>Id:{id}</p>
                <p className='card-id'>Stock: {stock}</p>
            </div>
        </div>
    )
};

export default Card;