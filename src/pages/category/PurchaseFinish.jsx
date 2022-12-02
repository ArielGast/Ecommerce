import React from "react";
import cat from '../../components/images/catwine3.png'
import './PurchaseFinish.css';

const PurchaseFinish = () => {

    return(
        <div className="finishContainer">
            <h1 className="finishTitle">Thanks for Buying - Enjoy!!</h1>
            <img className="finishImg" src={cat} alt='Cat drinking wine'></img>
        </div>
    )
}
export default PurchaseFinish