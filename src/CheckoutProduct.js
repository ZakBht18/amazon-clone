import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //   remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className='CheckoutProduct'>
      <img src={image} className='CheckoutProduct__image' alt='' />
      <div className='CheckoutProduct__info'>
        <p className='CheckoutProduct__title'>{title}</p>
        <p className='CheckoutProduct__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='CheckoutProduct__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
