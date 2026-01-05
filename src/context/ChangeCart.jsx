import React, { createContext, useState } from 'react'
import useGet from '../hooks/useGet';

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();


function ChangeCart({ children }) {

  const [cart, setCart] = useState([]);
  const { data: products } = useGet("products");

  function addToCart(id) {
    let cartItem = products.find((el) => el.id === id);
    setCart((prev) => {
      return [...prev, { ...cartItem, qty: 1 }];
    });
  }

  function increase(id) {
    setCart((prev) => {
      return prev.map((el) => el.id === id ? { ...el, qty: el.qty + 1 } : el);
    });
  }

  function decrease(id) {
    setCart((prev) => {
      return prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0);
    });
  }
  

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart, increase, decrease }}>
      {children}
    </CartContext.Provider>
  )
}

export default ChangeCart;