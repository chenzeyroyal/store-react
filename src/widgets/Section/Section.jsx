import styles from "./Section.module.scss";
import classNames from "classnames";

const Section = (props) => {
  const { className, title, actions, children, isHeaderHidden } = props;

  return (
    <section className={classNames(className, styles.section)}>
      {title && (
        <header
          className={classNames(styles.header, {
            ["visually-hidden"]: isHeaderHidden,
          })}
        >
          <div className={styles.description}>
            <h2 className={styles.title}>{title}</h2>
          </div>
          {actions && <div className={styles.actions}>{actions}</div>}
        </header>
      )}

      <div className="section__body">{children}</div>
    </section>
  );
};

export default Section;
