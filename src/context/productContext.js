import {createContext, useState} from "react";

const initialState = {
    allProducts: null,
    setAllProducts: () => {},
    allCategories: null,
    setAllCategories: () => {},
    filtering: null,
    setFiltering: () => {},
    filteredProducts: null,
    setFilteredProducts: () => {},
    cart: null,
    setCart: () => {},
    cartId: null,
    setCartId: () => {},
}

export const ProductContext = createContext(initialState);

export const ProductProvider = ({children}) => {
    const [allProducts, setAllProducts] = useState([]);
    const [allCategories, setAllCategories] = useState(null);
    const [filtering, setFiltering] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState(null);
    const [cart, setCart] = useState([]);
    const [cartId, setCartId] = useState([]);

    return (
        <ProductContext.Provider value ={{allProducts, setAllProducts,allCategories, setAllCategories, filtering,setFiltering,filteredProducts,setFilteredProducts,cart,setCart,cartId,setCartId}}>
            {children}
        </ProductContext.Provider>
    )

};