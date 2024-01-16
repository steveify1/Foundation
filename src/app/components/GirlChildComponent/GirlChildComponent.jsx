import Image from "next/image";
import Link from "next/link";
import Nav from "../Nav/Nav";
import Button from "../Button/Button";
import { Container } from "../Container/Container";
import Footer from "../Footer/Footer";
import Highlight from "../Highlight/Highlight";

import styles from "./GirlChildComponent.module.css";

export default function GirlChild() {
  return (
    <div className={styles.programSection}>
      {" "}
      <Nav />
      <Container className={styles.programHeroSection}>
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
            <Button>Learn more</Button>
          </div>
        </div>
        <div className={styles.programHeroImgSection}>
          <img src="images/girl.png" />
        </div>
      </Container>
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
      {/* /////////////OUR MISSION//////////////// */}
      <Container className={styles.ourMission}>
        <div className={styles.ourMissionsection}>
          <div className={styles.ourMissionDetailsection}>
            <div className={styles.ourMissionsectionHeader}>
              <h4>Together, Let&apos;s Empower Dreams</h4>
            </div>
            <div className={styles.ourMissionSubSection}>
              <h2>
                The journey toward gender equality begins with supporting the
                dreams of every girl. Join us in creating a world where
                opportunities are limitless, and every girl can reach her full
                potential. Together, let&apos;s empower dreams and build a
                brighter future for all.
              </h2>
            </div>
          </div>
        </div>
      </Container>
      <Highlight />
      <Footer />
    </div>
  );
}
