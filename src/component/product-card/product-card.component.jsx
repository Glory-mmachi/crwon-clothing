import "./product-card.styles.scss";
import { useContext } from "react";
import { DropDownContext } from "../../context/dropDown.context";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
// import { ProductButton ,ProductCardContainer.Footer} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(DropDownContext);
  const addProductToCart = () => {
    addItemToCart(product);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />

      <div className="fotter">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        ADD TO CART
      </Button>
    </div>
  );
};

export default ProductCard;
