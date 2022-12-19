import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_DATA = [
  {
    id: "p1",
    title: "first book",
    price: 6,
    description: "first book that i ever wrote",
  },
  {
    id: "p2",
    title: "second book",
    price: 10,
    description: "second book that i ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((item) => (
          <ProductItem
          id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            key={item.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
