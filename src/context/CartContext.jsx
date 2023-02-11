import { createContext } from 'react'
import { useLocalStorage } from '../customHooks/useLocalStorage';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage('usrCart', []);

  const addToCart = (item, qty) => {
    setCart([...cart, { item, qty }]);
  }

  const handleRemoveItem = (item) => {
    setCart(cart.filter(f => f.item.idProduct !== item.item.idProduct));
  }

  const calcTotal = () => {
    return cart.reduce(((acc, r) => acc + r.item.price * r.qty), 0)
  }

  const calcQty = () => {
    return cart.reduce(((acc, r) => acc + r.qty), 0)
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, handleRemoveItem, setCart, calcTotal, calcQty }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext;
export { CartProvider };