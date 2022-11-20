import React from "react";
import { useSelector } from "react-redux";
import CategoryPreviewComponent from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/category.selector";
import "./categories-preview.style.scss";

const CategoriesPreviewComponent = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => (
          <CategoryPreviewComponent
            key={title}
            title={title}
            products={categoriesMap[title]}
          ></CategoryPreviewComponent>
        ))
      )}
    </>
  );
};

export default CategoriesPreviewComponent;
