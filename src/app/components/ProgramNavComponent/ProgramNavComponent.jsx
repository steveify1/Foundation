import Image from "next/image";
import Link from "next/link";
import styles from "./ProgramNavComponent.module.css";

export default function ProgramNav() {
  return (
    <div className={styles.programNavContainer}>
      <ul className={styles.programNavLinks}>
        <li>
          <Link href="/girl-child" className={styles.programNavLink}>
            <div className={styles.sectionName}>
              The girl child support Programs{" "}
            </div>
            <div className={styles.programNavLinkImage}>
              {" "}
              {/* kdkdjdjd */}
              <img src="images/heroImage.png" alt="" />
            </div>
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.programNavLink}>
            <div className={styles.sectionName}>Prison Fair Programs</div>
            <div className={styles.programNavLinkImage}>
              {" "}
              <img src="images/heroImage.png" alt="" />
            </div>
          </Link>
        </li>

        <li>
          <Link href="/" className={styles.programNavLink}>
            <div className={styles.sectionName}>Elderly Support Program </div>
            <div className={styles.programNavLinkImage}>
              <img src="images/heroImage.png" alt="" />
            </div>
          </Link>
        </li>

        <li>
          <Link href="/" className={styles.programNavLink}>
            <div className={styles.sectionName}>
              Feed 100 Families for Christmas{" "}
            </div>
            <div className={styles.programNavLinkImage}>
              {" "}
              <img src="images/heroImage.png" alt="" />
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
