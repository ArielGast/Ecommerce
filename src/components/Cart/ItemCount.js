import React, {useContext} from "react";
import { ProductContext } from "../../context/productContext";
import './ItemCount.css';

const ItemCount = ({item}) => {
    const {cart, setCart} = useContext(ProductContext);
    const {allProducts} = useContext(ProductContext);
    const {stock, id} = item; 

    const descreaseQuantity = () => {
        setCart(currentCart => {
          if(currentCart?.find(item => item.id === id)?.quantity === 1) {
            return currentCart.filter(item => item.id !== id);
          } else {
            return currentCart?.map(item => {
              if(item.id === id) {
                return {
                  ...item,
                  quantity: item.quantity - 1,
                }
              } else {
                return item;
              }
            });
          }
        });
    }
    const increaseQuantity = () => {
        const item = allProducts?.find((product) => product.id === id);
        if(cart?.find((product) => product.id === id)?.quantity == item?.stock) return;
        if(cart?.length === 0){
            setCart([{ ...item, quantity: 1 }]);
            } else if(cart.length > 0 && !cart?.find(item => item.id === id)) {
            setCart([...cart, { ...item, quantity: 1 }]);
            } else {
            setCart(currentCart => {
                return currentCart.map((product) => {
                    if(product.id === id) {
                        return { ...product, quantity: product.quantity + 1 };
                    }  else {
                        return product;
                    }
                });
            });
        }
    }

    const getItemQuantity = (id) => {
      return cart?.find(item => item.id === id)?.quantity || 0; 
      }

    const numberOfItem = getItemQuantity(item.id);
    
    return (
        <div className='button-container'>
            <button className='button-count' disabled = {numberOfItem >= stock} onClick ={() => increaseQuantity()}>+</button>
            <p className='span-count'>{numberOfItem}</p>
            <button className='button-count' disabled ={numberOfItem<= 0} onClick ={ () => descreaseQuantity()}>-</button>
        </div>
    );

}

export default ItemCount;