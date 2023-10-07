import React, { useState, useCallback, useMemo, useEffect } from "react";
import defaultProducts from "../data/products.json";
import ProductDisplay from "../components/ProductDisplay";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/Navbar"

const Home = () => {
  const [basket, setBasket] = useState([]);

  const AddBasket = useCallback(
    (product) => {
      setBasket([...basket, product]);
    },
    [basket, setBasket]
  );

  const totalSpend = useMemo(() => {
    let total = 0;
    basket.forEach((product) => {
      total += product.Price;
    });
    return total;
  }, [basket]);

  return (
    <div>
      <Header basket={basket} totalSpend={totalSpend} />
      <div className="row">
      {defaultProducts.map((product, index) => {  
          return (
            <ProductDisplay
              addToBasket={AddBasket}
              product={product}
              productName={product.Product}
              img={product.imgUrl}
              id={product.id}
              origin={product.Origin}
              price={product.Price}
              addBasket={AddBasket}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Home;