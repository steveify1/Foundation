import styles from "./Highlight.module.css";
import { Container } from "../Container/Container";

export default function Highlight() {
  return (
    <main>
      <Container className={styles.HighlightSection}>
        <div className={styles.HighlightHeaderSection}>
          <h2>Highlights</h2>
        </div>

        <div className={styles.HighlightDetailsSection}>
          <div className={styles.HighlightDetailImgSection}>
            <img src="images/highlight1.png" alt="" />
          </div>
          <div className={styles.HighlightDetailImgSection}>
            <img src="images/highlight2.png" alt="" />
          </div>

          <div className={styles.HighlightDetailImgSection}>
            <img src="images/highlight3.png" alt="" />
          </div>

          <div className={styles.HighlightDetailImgSection}>
            <img src="images/highlight4.png" alt="" />
          </div>

          <div className={styles.HighlightDetailImgSection}>
            <img src="images/highlight5.png" alt="" />
          </div>

          <div className={styles.HighlightDetailImgSection}>
            <img src="images/highlight6.png" alt="" />
          </div>

          <div className={styles.HighlightDetailImgSection}>
            <img src="images/highlight7.png" alt="" />
          </div>

          <div className={styles.HighlightDetailImgSection}>
            <img src="images/highlight8.png" alt="" />
          </div>
        </div>
      </Container>
    </main>
  );
}
