import { useContext } from "react";
import { DropDownContext } from "../../context/dropDown.context";
import {
  CheckoutItemContainer,
  Arrow,
  ImageContainer,
  SpanStyles,
  Quantity,
  RemoveBtn,
  Value,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, deleteItemFromCart } =
    useContext(DropDownContext);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const deleteHandler = () => deleteItemFromCart(cartItem);
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <SpanStyles>{name}</SpanStyles>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <SpanStyles>${price}</SpanStyles>
      <RemoveBtn onClick={deleteHandler}>&#10005;</RemoveBtn>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
