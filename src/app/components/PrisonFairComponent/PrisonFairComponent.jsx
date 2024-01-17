import Image from "next/image";
import Link from "next/link";
import Nav from "../Nav/Nav";
import Button from "../Button/Button";
import { Container } from "../Container/Container";
import Footer from "../Footer/Footer";
import Highlight from "../Highlight/Highlight";
import Event from "../Event/Event";

import styles from "./PrisonFairComponent.module.css";

export default function PrisonFairPage() {
  return (
    <main>
      <div className={styles.programSection}>
        {" "}
        <Nav />
        <Container className={styles.programHeroSection}>
          <div className={styles.programHeroTextSection}>
            <div className={styles.programHeroHeaderSection}>
              <h2>Prison Fair Programs</h2>
            </div>
            <div className={styles.programHeroSubSection}>
              <p>
                Welcome to our Prison Fair Initiative, a transformative program
                dedicated to restoring justice within the prison system. We
                believe in fostering fairness, rehabilitation, and positive
                change for inmates, contributing to a more equitable criminal
                justice system.
              </p>
            </div>
            <div className={styles.programHeroButton}>
              {" "}
              <Button>Learn more</Button>
            </div>
          </div>
          <div className={styles.programHeroImgSection}>
            <img src="images/prison.png" />
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
                    <h4>Advocacy for Reform</h4>
                  </div>
                  <div className={styles.howWeHelpDetailSubSection}>
                    <p>
                      We actively advocate for policy changes and reforms aimed
                      at creating a more just and rehabilitative prison system.{" "}
                    </p>
                  </div>
                </div>

                <div className={styles.howWeHelpDetail}>
                  <div className={styles.howWeHelpDetailHeader}>
                    <h4>Rehabilitation Support</h4>
                  </div>
                  <div className={styles.howWeHelpDetailSubSection}>
                    <p>
                      Through various programs, we support inmate rehabilitation
                      efforts, providing education, vocational training, and
                      mental health resources.
                    </p>
                  </div>
                </div>

                <div className={styles.howWeHelpDetail}>
                  <div className={styles.howWeHelpDetailHeader}>
                    <h4>Community Engagement</h4>
                  </div>
                  <div className={styles.howWeHelpDetailSubSection}>
                    <p>
                      We engage with communities to raise awareness about the
                      importance of a fair and rehabilitative criminal justice
                      system, fostering understanding and support.
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
                <h4>Join Us in Restoring Justice</h4>
              </div>
              <div className={styles.ourMissionSubSection}>
                <h2>
                  Be a part of the movement to restore justice and transform
                  lives within the prison system. Together, we can create a
                  society that values rehabilitation and provides second chances
                  for those seeking a path to positive change.
                </h2>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Event />
      <Highlight />
      <Footer />
    </main>
  );
}
