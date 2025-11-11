import Icon from "../Icon";
import styles from "./MenuLink.module.scss";

const MenuLink = (props) => {
  const { href, title, icon, badge } = props;
  return (
    <a className={styles.menuLink} href={href}>
      <Icon name={icon} size={25} />
      <span>{title}</span>
      {badge && <span className={styles.badge}>{badge}</span>}
    </a>
  );
};

export default MenuLink;
