import classNames from "classnames";
import Icon from "@/shared/ui/Icon";
import styles from "./CategoryMenu.module.scss";
import useCategories from "@/shared/hooks/useCategories";

const CategoryMenu = (props) => {
  const { id, isExpanded } = props;

  const { categories } = useCategories();

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
