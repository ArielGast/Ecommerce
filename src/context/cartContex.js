import { createContext, useState } from "react";

const initialState  = {
    isEmpty: true,
    toggleCart: () => {},
} 

export const ThemeContext = createContext(initialState);

export const ThemeProvider = ({children}) => {
    const [isEmpty, setIsEmpty] = useState(true);
    
    const toggleCart = () {
        setIsEmpty(isEmpty);
    }
}
return (
    <ThemeContext.Provider value={isEmpty, toggleCart}
)