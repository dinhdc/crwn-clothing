import React, { useContext } from "react";
import { CategoriesContext } from "../../contexts/product.context";
import CategoryPreviewComponent from "../../components/category-preview/category-preview.component";
import "./categories-preview.style.scss";

const CategoriesPreviewComponent = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
    
      {Object.keys(categoriesMap).map((title) => (
        <CategoryPreviewComponent
          key={title}
          title={title}
          products={categoriesMap[title]}
        ></CategoryPreviewComponent>
      ))}
    </>
  );
};

export default CategoriesPreviewComponent;
