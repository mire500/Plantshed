import React, { useState } from "react";

function ProductDisplay({
  addToBasket,
  img,
  productName,
  product,
  origin,
  price,
}) {
  const [number, setNumber] = useState(0);
  function increment() {
    if (number >= 5) {
      return;
    }
    addToBasket(product);
    setNumber(number + 1);
  }
  return (
    <div>
      <div class="product-item">
        <img class="image" src={img} />
        <h2 class="product-title">{productName}</h2>
        <div class="origin-price">
          <h2 class="origin">{origin}</h2>
          <h2>£{price.toFixed(2)}</h2>
        </div>
        <div class="button-increment">
          <button class="buy" onClick={() => increment()}>
            {number > 0 ? <p>done</p> : <p>add to Basket</p>}
          </button>
          <div className="w-10 border-2 p-1 border-blue-400 ">{number}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;