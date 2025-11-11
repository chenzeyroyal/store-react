import styles from "./Modal.module.scss";

const Modal = (props) => {
  const { children, duration, isModalVisible } = props;

  return (
    <dialog
      className={styles.modal}
      open={isModalVisible}
      style={{ "--modal-duration": `${duration / 1000}s` }}
    >
      <div className={styles.modalBody}>{children}</div>
      <div className={styles.progressBar}>
        <div className={styles.progressFill}></div>
      </div>
    </dialog>
  );
};

export default Modal;
