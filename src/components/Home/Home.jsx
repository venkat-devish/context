import React from "react";
import { cartState } from "../../context/CartContext";
import Card from "../../organisms/Card/Card";
import Filters from "../Filters/Filters";
import "./Home.scss";

const Home = () => {
  const {
    state: { products },
  } = cartState();

  console.log(products);

  return (
    <div className="home__container">
      <Filters />
      <div className="home__products">
        {products.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            title={product.prodName}
            price={product.price.substring(0, 3)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
