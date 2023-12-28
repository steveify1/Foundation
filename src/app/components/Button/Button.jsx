import styles from "./Button.module.scss";

export default function Button({ size, type, children }) {
  return (
    <button className={`${styles.button} ${styles[type]} ${styles[size]}`}>
      {children}
    </button>
  );
}
