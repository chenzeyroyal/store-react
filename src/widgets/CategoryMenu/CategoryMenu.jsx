import Icon from "@/shared/ui/Icon";
import styles from "./CategoryMenu.module.scss";
import classNames from "classnames";

const CategoryMenu = (props) => {
  const { id, isExpanded } = props;
  const categories = [
    {
      title: "Смартфоны и гаджеты",
      href: "/",
      icon: "phone",
      image: "",
      isPopular: true,
    },
    {
      title: "Телевизоры",
      href: "/",
      icon: "tv",
      image: "",
      isPopular: true,
    },
    {
      title: "Компьютеры и ноутбуки",
      href: "/",
      icon: "laptop",
      image: "",
      isPopular: true,
    },
    {
      title: "Крупная бытовая",
      href: "/",
      icon: "wash",
      image: "",
      isPopular: false,
    },
    {
      title: "Красота и здоровье",
      href: "/",
      icon: "health",
      image: "",
      isPopular: false,
    },
  ];

  return (
    <nav
      className={classNames(styles.menu, isExpanded && styles.isExpanded)}
      id={id}
    >
      <ul className={styles.list}>
        {categories.map(({ title, icon }, index) => (
          <li className="" key={index}>
            <a className={styles.link}>
              <Icon name={icon} fill="none" />
              <span>{title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoryMenu;
