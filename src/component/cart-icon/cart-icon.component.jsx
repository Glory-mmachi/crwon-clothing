import { useContext } from "react";
import { DropDownContext } from "../../context/dropDown.context";

import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.style";

const CartIcon = () => {
  const { isDropped, setIsDropped, cartCount } = useContext(DropDownContext);
  const toggleHandler = () => {
    setIsDropped(!isDropped);
  };

  return (
    <CartIconContainer onClick={toggleHandler}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
