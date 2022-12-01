import React from "react";
import { useContext} from "react";
import { ProductContext } from "../../context/productContext";
import CardCart from "../../components/Cart/CardCart";
import UserData from "../../components/Cart/UserData";

const CartCheckOut = () => {
    const{cart} = useContext(ProductContext);
    return (
        <div className="cartContent">
                <div className="list-container">
                        {cart.map(product =>(
                            <CardCart key={product.id} item={product} />
                    ))}
                </div>
           |<UserData />              
        </div>
    )
}

export default CartCheckOut;