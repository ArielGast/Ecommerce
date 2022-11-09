import React, {useState} from "react";
import './ItemCount.css';


const ItemCount = ({item}) => {
    const {stock} = item;
    const [count, setCount] = useState(1);
    return (
        <div className='button-container'>
            <button className='button-count' disabled = {count >= stock} onClick ={() => setCount(count + 1)   }>+</button>
            <span className='span-count'>{count}</span>
            <button className='button-count' disabled ={count<= 0} onClick ={() => setCount(count - 1)}>-</button>
            <button className='button-addchart'>Add</button>
        </div>
    );

}

export default ItemCount;