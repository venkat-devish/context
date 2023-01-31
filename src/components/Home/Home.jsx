import React from "react";
import { cartState } from "../../context/CartContext";
import Card from "../../organisms/Card/Card";
import "./Home.scss";

const Home = () => {
  const {
    state: { products },
  } = cartState();

  return (
    <div className="home__container">
      Filters
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
