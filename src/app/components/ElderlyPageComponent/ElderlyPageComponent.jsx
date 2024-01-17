import Image from "next/image";
import Link from "next/link";
import Nav from "../Nav/Nav";
import Button from "../Button/Button";
import { Container } from "../Container/Container";
import Footer from "../Footer/Footer";
import Highlight from "../Highlight/Highlight";
import Event from "../Event/Event";

import styles from "./ElderlyPageComponent.module.css";

export default function ElderlyPage() {
  return (
    <main>
      <div className={styles.programSection}>
        {" "}
        <Nav />
        <Container className={styles.programHeroSection}>
          <div className={styles.programHeroTextSection}>
            <div className={styles.programHeroHeaderSection}>
              <h2>Elderly Support Program</h2>
            </div>
            <div className={styles.programHeroSubSection}>
              <p>
                Step into the heart of our Elderly Support Program, where we are
                dedicated to providing caring companionship, assistance, and
                resources to enhance the lives of senior citizens in our
                community.
              </p>
            </div>
            <div className={styles.programHeroButton}>
              {" "}
              <Button>Learn more</Button>
            </div>
          </div>
          <div className={styles.programHeroImgSection}>
            <img src="images/elderly.png" />
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
                    <h4>Companionship Services</h4>
                  </div>
                  <div className={styles.howWeHelpDetailSubSection}>
                    <p>
                      We offer companionship through home visits, social
                      activities, and community events, fostering connections
                      and reducing social isolation.
                    </p>
                  </div>
                </div>

                <div className={styles.howWeHelpDetail}>
                  <div className={styles.howWeHelpDetailHeader}>
                    <h4>Assistance Programs</h4>
                  </div>
                  <div className={styles.howWeHelpDetailSubSection}>
                    <p>
                      Our initiatives include providing assistance with daily
                      activities, healthcare support, and ensuring access to
                      essential resources for the elderly.
                    </p>
                  </div>
                </div>

                <div className={styles.howWeHelpDetail}>
                  <div className={styles.howWeHelpDetailHeader}>
                    <h4>Advocacy for Senior Rights</h4>
                  </div>
                  <div className={styles.howWeHelpDetailSubSection}>
                    <p>
                      We actively advocate for the rights of senior citizens,
                      promoting policies that enhance their well-being and
                      quality of life.
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
                <h4>Join Us in Providing Caring Companionship</h4>
              </div>
              <div className={styles.ourMissionSubSection}>
                <h2>
                  Become a part of our mission to provide caring companionship
                  and support to the elderly. Together, let&apos;s ensure that
                  every senior citizen can age with dignity and continue to lead
                  fulfilling lives.
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
