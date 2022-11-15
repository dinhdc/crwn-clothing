import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import ButtonComponent from "../button/button.component";
import CartItemComponent from "../cart-item/cart-item.component";
import "./cart-dropdown.style.scss";
const CartDropdownComponent = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandle = () => {
    setIsCartOpen(false);
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItemComponent key={item.id} cartItem={item} />
        ))}
      </div>
      <ButtonComponent onClick={goToCheckoutHandle} buttonType="inverted">
        Check Out
      </ButtonComponent>
    </div>
  );
};

export default CartDropdownComponent;
