import React from "react";
import ButtonComponent from "../button/button.component";
import "./product-card.component.scss";
const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <ButtonComponent buttonType="inverted">Add to card</ButtonComponent>
    </div>
  );
};

export default ProductCard;
