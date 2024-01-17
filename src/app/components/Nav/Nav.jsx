import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import styles from "./Nav.module.scss";
import { Container } from "../Container/Container";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Container className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <h2>EOF</h2>
        </Link>
        <ul className={styles.headerLinks}>
          <li className={styles.headerLink}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.headerLink}>
            <Link href="/about">About</Link>
          </li>

          <li className={styles.headerLink}>
            <Link href="/program">Program</Link>
          </li>
        </ul>
        <div className={styles.navButtonSection}>
          <Link href="/girl">
            {" "}
            <Button> Get Involved</Button>
          </Link>
        </div>{" "}
      </Container>
    </nav>
  );
}
