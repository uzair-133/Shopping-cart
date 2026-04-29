import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({children})=> {
    const [cart , SetCart] = useState([]);

//add product
    const AddToCart = (product) => {
        SetCart((prev)=>{
            const existing = prev.find((item)=> item.id === product.id)
            if(existing){
            return prev.map((item)=> item.id === product.id ? {...item,qty: item.qty + 1} : item )
            }
            return[...prev, {...product, qty: 1}]
        })
    }
//remove product
    const RemoveFromCart = (productId) => {
        SetCart((prev)=> prev.filter((item)=> item.id !== productId))
    }
    //update qty
    const UpdateCartQty = (productId, qty) => {
        SetCart((prev)=> prev.map((item)=> (item.id === productId ? {...item, qty} : item)))
    }
    //total price
    const TotalPrice = cart.reduce((total, item)=> total + item.price * item.qty, 0)

    return (
        <CartContext.Provider value={{cart, AddToCart, RemoveFromCart, UpdateCartQty, TotalPrice}}>
           {children}
        </CartContext.Provider>

    )
}

//custom hook
export const useCart = () => useContext(CartContext)