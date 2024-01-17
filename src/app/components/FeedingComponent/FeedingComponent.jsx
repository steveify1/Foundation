import Image from "next/image";
import Link from "next/link";
import Nav from "../Nav/Nav";
import Button from "../Button/Button";
import { Container } from "../Container/Container";
import Footer from "../Footer/Footer";
import Highlight from "../Highlight/Highlight";
import Event from "../Event/Event";

import styles from "./FeedingComponent.module.css";

export default function FeedingPage() {
  return (
    <main>
      <div className={styles.programSection}>
        {" "}
        <Nav />
        <Container className={styles.programHeroSection}>
          <div className={styles.programHeroTextSection}>
            <div className={styles.programHeroHeaderSection}>
              <h2>Feed 100 Families for Christmas</h2>
            </div>
            <div className={styles.programHeroSubSection}>
              <p>
                Welcome to our Feed 100 Families for Christmas program, where we
                aim to spread joy and share love by providing festive meals and
                essential groceries to families facing food insecurity during
                the holiday season.
              </p>
            </div>
            <div className={styles.programHeroButton}>
              {" "}
              <Button>Learn more</Button>
            </div>
          </div>
          <div className={styles.programHeroImgSection}>
            <img src="images/highlight1.png" />
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
                    <h4>Festive Meal Distribution</h4>
                  </div>
                  <div className={styles.howWeHelpDetailSubSection}>
                    <p>
                      We provide festive meals and essential groceries to 100
                      families, bringing warmth and joy to their homes during
                      the holiday season.
                    </p>
                  </div>
                </div>

                <div className={styles.howWeHelpDetail}>
                  <div className={styles.howWeHelpDetailHeader}>
                    <h4>Community Engagement</h4>
                  </div>
                  <div className={styles.howWeHelpDetailSubSection}>
                    <p>
                      We engage with the community to identify and reach out to
                      families facing food insecurity, ensuring that our support
                      reaches those who need it most.
                    </p>
                  </div>
                </div>

                <div className={styles.howWeHelpDetail}>
                  <div className={styles.howWeHelpDetailHeader}>
                    <h4>Volunteer Opportunities</h4>
                  </div>
                  <div className={styles.howWeHelpDetailSubSection}>
                    <p>
                      Join us in spreading love and joy by volunteering to
                      assist in the preparation and distribution of festive
                      meals to families in need.
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
                <h4>Join Us in Spreading Joy</h4>
              </div>
              <div className={styles.ourMissionSubSection}>
                <h2>
                  Be a part of our mission to spread joy and share love during
                  the holiday season. Together, let&apo;s ensure that 100
                  families can experience the warmth and celebration that the
                  holidays bring.
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
