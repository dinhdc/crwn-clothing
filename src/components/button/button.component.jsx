import React from "react";
import "./button.component.scss";

const BUTTON_TYPE_CLASS = {
  google: "google-sign-in",
  inverted: "inverted",
};

const ButtonComponent = ({ children, buttonType, ...ortherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASS[buttonType]}`}
      {...ortherProps}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
