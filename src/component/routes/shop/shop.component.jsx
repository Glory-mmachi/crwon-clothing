import { useContext } from "react";
import "./shop.style.scss";
import ProductCard from "../../product-card/product-card.component";
import { ProductsContext } from "../../../context/products.context";
const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Shop;
