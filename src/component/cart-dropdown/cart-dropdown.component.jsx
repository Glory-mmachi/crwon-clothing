import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { DropDownContext } from "../../context/dropDown.context";
import { useNavigate } from "react-router-dom";
import {
  CartDropdownContainer,
  CartItemss,
  EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { cartItems } = useContext(DropDownContext);
  const navigate = useNavigate();
  const gotToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer>
      <CartItemss>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemss>

      <Button onClick={gotToCheckoutHandler}> GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
