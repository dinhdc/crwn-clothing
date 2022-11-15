import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.style.scss";
const CheckoutItemComponent = ({ item }) => {
  const { name, quantity, imageUrl, price } = item;
  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const clearItemHandle = () => {
    clearItemFromCart(item);
  };
  const addItemHandle = () => {
    addItemToCart(item);
  };
  const removeItemHandle = () => {
    removeItemToCart(item);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name"> {name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandle}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={addItemHandle}>
          &#10095;
        </div>
      </span>
      <span className="price"> {price}</span>
      <div className="remove-button" onClick={clearItemHandle}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItemComponent;
