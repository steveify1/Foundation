import Image from "next/image";
import styles from "./Button.module.css";
import { Children } from "react";

export default function Button({ size, type, children }) {
  return (
    <button className={`${styles.button} ${styles[type]} ${styles[size]}`}>
      {children}
    </button>
  );
}
