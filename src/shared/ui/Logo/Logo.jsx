import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <a className={styles.logo} href="/">
      <img src="/logo.png" width={400} />
    </a>
  );
};

export default Logo;
