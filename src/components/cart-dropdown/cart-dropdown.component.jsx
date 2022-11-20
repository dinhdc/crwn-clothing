import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import ButtonComponent from "../button/button.component";
import CartItemComponent from "../cart-item/cart-item.component";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./card-dropdown.styled";
const CartDropdownComponent = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandle = () => {
    setIsCartOpen(false);
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => (
            <CartItemComponent key={item.id} cartItem={item} />
          ))
        ) : (
          <EmptyMessage as="span">Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <ButtonComponent onClick={goToCheckoutHandle} buttonType="inverted">
        Check Out
      </ButtonComponent>
    </CartDropdownContainer>
  );
};

export default CartDropdownComponent;
