import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import ButtonComponent, { BUTTON_TYPE_CLASS } from "../button/button.component";
import "./product-card.component.scss";
const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <ButtonComponent
        onClick={addProductToCart}
        buttonType={BUTTON_TYPE_CLASS.inverted}
      >
        Add to card
      </ButtonComponent>
    </div>
  );
};

export default ProductCard;
