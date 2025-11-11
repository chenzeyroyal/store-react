import Button from "@/shared/ui/Button";
import styles from "./ProductCard.module.scss";
import Icon from "@/shared/ui/Icon";
import { useContext } from "react";
import { ProductsContext } from "@/entities/model/ProductsContext";
import classNames from "classnames";

const ProductCard = (props) => {
  const {
    id,
    title,
    image,
    score,
    price,
    specifications = [],
    mode = "large",
    isFavorite,
  } = props;

  const formattedPrice = price.toLocaleString("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0,
    currencyDisplay: "symbol",
  });

  const { toggleToFavorite } = useContext(ProductsContext);

  return (
    <div className={classNames(styles.productCard, styles[mode])}>
      <img className={styles.image} src={image} alt="" width={200} />
      <div className={styles.description}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.score}>
          <Icon
            className={styles.star}
            name="star"
            width={20}
            height={20}
            fill="currentColor"
          />
          <span>{score}</span>
        </div>

        {mode !== "small" && (
          <ul className={styles.specList}>
            {specifications.map((spec, index) => (
              <li className={styles.specItem} key={index}>
                <span>{`${spec.title}:`}</span>
                <span>{spec.value}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={styles.actions}>
        <span className={styles.price}>{formattedPrice}</span>
        <div className={styles.buttons}>
          <Button label="В корзину" isAccent icon="cart" />

          <label className={styles.favButton}>
            <Icon name="heart" />
            <input
              type="checkbox"
              name="subcategory-filters"
              checked={isFavorite}
              onChange={({ target }) => toggleToFavorite(id, target.checked)}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
