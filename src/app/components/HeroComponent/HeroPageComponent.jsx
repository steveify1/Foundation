import Image from "next/image";
import Link from "next/link";
import styles from "./HeropageComponent.module.css";

export default function HeroPage() {
  return (
    <main>
      <div className={styles.navSection}>
        <div className={styles.logoSection}>
          <h2>000000</h2>
        </div>

        <div className={styles.navMenuSection}>
          <ul className={styles.headerLinks}>
            <li className={styles.headerLink}>
              <Link href="/HomePage">Home</Link>
            </li>
            <li className={styles.headerLink}>
              <Link href="/about">About</Link>
            </li>

            <li className={styles.headerLink}>
              <Link href="/contact">Program</Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
// https://github.com/Nwakasi-Osita/Foundation.git

// echo "# Foundation" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Nwakasi-Osita/Foundation.git
// git push -u origin main
