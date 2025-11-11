import styles from "./Popular.module.scss";
import Section from "@/widgets/Section/Section";
import CategoryCard from "@/widgets/CategoryCard";
import classNames from "classnames";
import useCategories from "@/shared/hooks/useCategories";

const Popular = () => {
  const { categories } = useCategories();
  const popularCategories = categories.filter((category) => category.isPopular);

  return (
    <Section
      className={classNames(styles.popular, "container")}
      title="Популярные категории"
    >
      <ul className={styles.list}>
        {popularCategories.map((category, index) => (
          <li className={styles.listItem} key={index}>
            <CategoryCard {...category} />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Popular;
