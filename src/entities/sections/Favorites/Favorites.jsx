import Section from "@/widgets/Section/Section";
import ProductCard from "@/widgets/ProductCard";
import styles from "./Favorites.module.scss";
import classNames from "classnames";
import Button from "@/shared/ui/Button";
import Icon from "@/shared/ui/Icon";
import { useContext, useEffect, useRef } from "react";
import { ProductsContext } from "@/entities/model/ProductsContext";
import Modal from "@/shared/ui/Modal";
import useModals from "@/shared/hooks/useModals";

const Favorites = () => {
  const { products, toggleToFavorite, removedProductId, favoritesCount } =
    useContext(ProductsContext);

  const filteredProducts = products.filter((product) => product.isFavorite);

  const modalDuration = 5000;

  const { isModalVisible, setIsModalVisible } = useModals(modalDuration);

  const prevFavoritesCountRef = useRef(favoritesCount);

  useEffect(() => {
    if (favoritesCount < prevFavoritesCountRef.current) {
      setIsModalVisible(true);
    }
    prevFavoritesCountRef.current = favoritesCount;
  }, [favoritesCount, setIsModalVisible]);

  const undoToFavorite = () => {
    setIsModalVisible(false);
    toggleToFavorite(removedProductId, true);
  };

  return (
    <Section
      className={classNames(styles.favorites, "container")}
      title="Избранное"
    >
      {filteredProducts.length > 0 ? (
        <ul className={styles.favoritesList}>
          {filteredProducts.map((product, index) => (
            <li className={styles.favoritesItem} key={index}>
              <ProductCard mode="small" {...product} />
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.notFoundInfo}>
          <div className={styles.iconContainer}>
            <Icon name="heart" width={35} height={35} />
          </div>
          <h3>Здесь будут ваши избранные товары</h3>
          <p>Добавьте товары, чтобы не искать их снова</p>
          <Button label="В магазин" href="/store" isAccent />
        </div>
      )}

      <Modal isModalVisible={isModalVisible} duration={modalDuration}>
        <span>Товар удален из избранного</span>
        <Button
          label="Вернуть обратно товар в избранное"
          icon="arrow-rotate"
          onClick={undoToFavorite}
          mode="circle"
          isAccent
          isLabelHidden
        />
      </Modal>
    </Section>
  );
};

export default Favorites;
