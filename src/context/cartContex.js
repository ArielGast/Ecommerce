import { createContext, useState } from "react";


const initialState  = {
    art: {},
    setArt: () => {},
    isEmpty: true,
    setIsEmpty: () => {},
} 

export const CartContext = createContext(initialState);

export const CartProvider = ({children}) => {
    const [art, setArt] = useState([]);
    const [isEmpty, setIsEmpty] = useState(true);

    return (
        <CartContext.Provider value={{art, setArt, isEmpty, setIsEmpty}}>
            {children}
        </CartContext.Provider>
    )
}