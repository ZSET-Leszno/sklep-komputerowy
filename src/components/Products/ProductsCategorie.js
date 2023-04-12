import category from "../../asset/category.json";
import classes from "./ProductsCategorie.module.css";
const ProductsCategorie = () => {
  const elements = category.category;
  return (
    <section className={classes.section}>
      {elements.map((i) => (
        <div key={i.id} className={classes.product}>
          <img src={require(`../../asset/categoryImg/${i.img}`)} alt={i.name} />
          <h1>{i.name}</h1>
        </div>
      ))}
    </section>
  );
};

export default ProductsCategorie;
