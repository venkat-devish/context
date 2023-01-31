import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer } from "./Reducers";

const CartContext = createContext();

const Context = ({ children }) => {
  const products = [...Array(20)].map((el, i) => ({
    id: faker.datatype.uuid(),
    prodName: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.business(),
    inStock: Math.floor(Math.random() * 7),
    ratings: Math.floor(Math.random() * 5),
  }));

  const [state, dispatchFn] = useReducer(cartReducer, {
    products,
    cart: [],
  });

  return (
    <CartContext.Provider value={{ state, dispatchFn }}>
      {children}
    </CartContext.Provider>
  );
};

export const cartState = () => {
  return useContext(CartContext);
};

export default Context;
