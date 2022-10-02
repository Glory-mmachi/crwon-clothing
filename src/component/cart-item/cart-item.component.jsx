import { CartItemContainer, Name } from "./cart-item.styles";
const CartItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <div>
        <Name>{name}</Name>
        <br />
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </CartItemContainer>
  );
};

export default CartItem;
