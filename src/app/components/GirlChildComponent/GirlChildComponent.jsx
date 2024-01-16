import styles from "./GirlChildComponent.module.css";

export default function ProgramNav() {
  return (
    <div className={styles.programSection}>
      <div className={styles.programHeroSection}>
        <div className={styles.programHeroTextSection}>
          <div className={styles.programHeroHeaderSection}>
            <h2>The girl child support Programs</h2>
          </div>
          <div className={styles.programHeroSubSection}>
            <p>
              Welcome to our Girl Child Support Program, where we believe in
              empowering dreams and breaking barriers. Every girl deserves
              access to education, healthcare, and opportunities for personal
              growth. Through this initiative, we strive to create a world where
              gender equality is not just a goal but a reality. Join us in
              supporting and nurturing the potential of every girl, helping them
              build a brighter future.
            </p>
          </div>
          <div className={styles.programHeroButton}>
            {" "}
            <button>Learn more</button>
          </div>
        </div>
        <div className={styles.programHeroImgSection}>
          <img src="image/girl.png" />
        </div>
      </div>

      {/* ////////////HOW WE HELP////////// */}
      <div className={styles.howWeHelpSection}>
        <div className={styles.howWeHelpDetailSection}>
          <div className={styles.howWeHelp}>
            <div className={styles.howWeHelpSectionHeader}>
              <h4>How we help</h4>
            </div>
            <div className={styles.howWeHelpDetailsSection}>
              <div className={styles.howWeHelpDetail}>
                <div className={styles.howWeHelpDetailHeader}>
                  <h4>Education Advocacy</h4>
                </div>
                <div className={styles.howWeHelpDetailSubSection}>
                  <p>
                    We advocate for and work towards ensuring that girls have
                    equal access to education, promoting a future where
                    knowledge becomes a powerful tool for empowerment.
                  </p>
                </div>
              </div>

              <div className={styles.howWeHelpDetail}>
                <div className={styles.howWeHelpDetailHeader}>
                  <h4>Education Advocacy</h4>
                </div>
                <div className={styles.howWeHelpDetailSubSection}>
                  <p>
                    We advocate for and work towards ensuring that girls have
                    equal access to education, promoting a future where
                    knowledge becomes a powerful tool for empowerment.
                  </p>
                </div>
              </div>

              <div className={styles.howWeHelpDetail}>
                <div className={styles.howWeHelpDetailHeader}>
                  <h4>Education Advocacy</h4>
                </div>
                <div className={styles.howWeHelpDetailSubSection}>
                  <p>
                    We advocate for and work towards ensuring that girls have
                    equal access to education, promoting a future where
                    knowledge becomes a powerful tool for empowerment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
