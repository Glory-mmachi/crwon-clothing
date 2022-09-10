import CategoryItem from "../category-item/category-item.component";
import "./directory.style.scss";

const directory = ({ categories }) => {
  return (
    <div className="directory">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default directory;
