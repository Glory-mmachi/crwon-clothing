import { useContext } from "react";
import { DropDownContext } from "../../context/dropDown.context";
import "./checkout.styles.scss";
import CheckoutItem from "../checkout-item/checkout-item.component";

const CheckOUt = () => {
  const { cartItems, cartTotal } = useContext(DropDownContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>

        <div className="header-block">
          <span>Description</span>
        </div>

        <div className="header-block">
          <span>Quantity</span>
        </div>

        <div className="header-block">
          <span>Price</span>
        </div>

        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}

      <span className="total">Total:${cartTotal}</span>
    </div>
  );
};

export default CheckOUt;
