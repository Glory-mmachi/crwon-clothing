import { useContext } from "react";
import { DropDownContext } from "../../context/dropDown.context";

import "./cart-icon.style.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-icon.svg";

const CartIcon = () => {
  const { isDropped, setIsDropped } = useContext(DropDownContext);
  const toggleHandler = () => {
    setIsDropped(!isDropped);
  };

  return (
    <div className="cart-icon-container" onClick={toggleHandler}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
