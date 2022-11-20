import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemToCart,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import "./checkout-item.style.scss";
const CheckoutItemComponent = ({ item }) => {
  const { name, quantity, imageUrl, price } = item;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const clearItemHandle = () => {
    dispatch(clearItemFromCart(cartItems, item));
  };
  const addItemHandle = () => {
    dispatch(addItemToCart(cartItems, item));
  };
  const removeItemHandle = () => {
    dispatch(removeItemToCart(cartItems, item));
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
