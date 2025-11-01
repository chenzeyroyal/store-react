import styles from "./Logo.module.scss";

const Logo = () => {
  return <img className={styles.logo} src="/logo.png" width={250} />;
};

export default Logo;
