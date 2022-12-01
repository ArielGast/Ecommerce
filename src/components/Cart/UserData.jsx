import React from "react";
import { useState, useContext } from "react";
import { ProductContext } from "../../context/productContext";
import {getFirestore, collection, addDoc} from 'firebase/firestore';
import { useNavigate } from "react-router-dom";

const UserData = () => {
    const {cart, setCart} = useContext(ProductContext);
    const totalPurchase = cart.reduce((total, ele) => total + ele.price*ele.quantity, 0);
    const [userInput, setUserInput] = useState();
    const [mailInput, setMailInput] = useState();
    const {cartId, setCartId} = useContext(ProductContext);
    const navigate = useNavigate();

    const handleUserName = (e) => {
        setUserInput(e.target.value);
    };

    const handleUserMail = (e) => {
        setMailInput(e.target.value);
    };

    const handlePurchase = () => {
         const mycart = {
          user: {
            userName: userInput,
            userMail: mailInput
          },
          item: cart,
          total: totalPurchase
        } 
        const db = getFirestore();
        const cartsCollection = collection(db, 'cart');
        addDoc(cartsCollection, mycart).then((doc) =>{
            setCartId(doc.id)
        }).catch((err) => {
            console.log(err);
        }).finally(setCart([]));
        navigate(`/PurchaseFinish`);
    };

    return (
        <div className="mainContainer">
            <h3>Complete your information to finish your purchase</h3>
                <div className="form">
                    <input type="text" placeholder="Name" onChange={handleUserName}/>
                    <input type="email" placeholder="user@mail.com" onChange={handleUserMail}/>
                </div> 
            <p>Total: $ {totalPurchase}</p>
            <button className="buttonPurchase" onClick={handlePurchase}>Purchase</button>
        </div>       
    )
}

export default UserData;