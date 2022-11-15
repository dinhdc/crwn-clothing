import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import ButtonComponent from "../button/button.component";
import "./product-card.component.scss";
const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <ButtonComponent onClick={addProductToCart} buttonType="inverted">
        Add to card
      </ButtonComponent>
    </div>
  );
};

export default ProductCard;
