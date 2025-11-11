import styles from "./CategoryCard.module.scss";

const CategoryCard = (props) => {
  const { title, href, image } = props;

  return (
    <a className={styles.categoryCard} href={href}>
      <img className={styles.image} src={image} alt="" width={150} />
      <h3 className={styles.title}>{title}</h3>
    </a>
  );
};

export default CategoryCard;
