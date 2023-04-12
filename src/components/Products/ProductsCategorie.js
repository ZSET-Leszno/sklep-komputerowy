import category from "../../asset/category.json";
import classes from "./ProductsCategorie.module.css";
const ProductsCategorie = () => {
  const elements = category.category;
  return (
    <section className={classes["offer-section"]}>
      <h1 className={classes.header}>Offers</h1>
      <section className={classes["link-section"]}>
        {elements.map((i) => (
          <a href="#" key={i.id} className={classes.product}>
            <img
              src={require(`../../asset/categoryImg/${i.img}`)}
              alt={i.name}
            />
            <h1>{i.name}</h1>
          </a>
        ))}
      </section>
    </section>
  );
};

export default ProductsCategorie;
