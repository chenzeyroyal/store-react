import styles from "./Field.module.scss";

const Field = (props) => {
  const { id, label, type = "text", placeholder } = props;

  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.input}
        id={id}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default Field;
