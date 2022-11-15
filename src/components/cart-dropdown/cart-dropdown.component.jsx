import React from "react";
import ButtonComponent from "../button/button.component";
import "./cart-dropdown.style.scss";
const CartDropdownComponent = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <ButtonComponent buttonType="inverted">Check Out</ButtonComponent>
    </div>
  );
};

export default CartDropdownComponent;
