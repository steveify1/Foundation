import styles from "./Container.module.scss";

export const Container = (props) => {
  const { children, className } = props;

  return (
    <div className={`${styles.container} ${className || ""}`}>{children}</div>
  );
};
