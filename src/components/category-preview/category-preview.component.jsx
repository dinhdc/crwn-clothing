import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card.component";
import "./category-preview.style.scss";
const CategoryPreviewComponent = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={title} className="title">
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard product={product}></ProductCard>
          ))}
      </div>
    </div>
  );
};

export default CategoryPreviewComponent;
