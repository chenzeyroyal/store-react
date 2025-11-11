import Logo from "@/shared/ui/Logo";
import Icon from "@/shared/ui/Icon";
import Field from "@/shared/ui/Field";
import BurgerButton from "@/shared/ui/BurgerButton";
import classNames from "classnames";
import styles from "./Header.module.scss";
import CategoryMenu from "../CategoryMenu";
import { useContext, useState } from "react";
import MenuLink from "@/shared/ui/MenuLink";
import { ProductsContext } from "@/entities/model/ProductsContext";

const Header = () => {
  const { favoritesCount } = useContext(ProductsContext);

  const menuItems = [
    {
      title: "Магазин",
      href: "/store",
      icon: "store",
    },
    {
      title: "Избранное",
      href: "/favorites",
      icon: "heart",
      badge: favoritesCount > 0 && favoritesCount,
    },
    {
      title: "Корзина",
      href: "/",
      icon: "cart",
    },
    {
      title: "Войти",
      href: "/",
      icon: "login",
    },
  ];

  const categoryMenuId = "category-menu";

  const [isExpanded, setIsExpanded] = useState(false);

  const onBurgerButton = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <header className={classNames(styles.header, "container")}>
      <Logo />
      <div className={styles.searchBar}>
        <BurgerButton
          label="Каталог"
          menuId={categoryMenuId}
          isBurger
          isAccent
          isActive={isExpanded}
          onClick={onBurgerButton}
        />
        <Field type="search" id="search-products" placeholder="Найти товар" />
      </div>

      <CategoryMenu id={categoryMenuId} isExpanded={isExpanded} />

      <nav className={styles.menu}>
        <ul className={styles.menuList}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <MenuLink {...item} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
