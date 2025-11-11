import Section from "@/widgets/Section/Section";
import styles from "./Products.module.scss";
import ProductCard from "@/widgets/ProductCard";
import { useContext } from "react";
import { ProductsContext } from "@/entities/model/ProductsContext";

const Products = () => {
  const { products } = useContext(ProductsContext);

  return (
    <Section>
      <ul className={styles.productList}>
        {products.map((product) => (
          <li className={styles.productItem} key={product.id}>
            <ProductCard {...product} />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Products;
