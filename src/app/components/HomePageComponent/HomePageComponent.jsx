import Image from "next/image";
import Link from "next/link";
import styles from "./HomePageComponent.module.css";
import HeroPage from "../HeroComponent/HeroPageComponent";
import Button from "../Button/Button";
import { Container } from "../Container/Container";

import Footer from "../Footer/Footer";

export default function HomePage() {
  return (
    <main>
      <div className={styles.homePageSection}>
        <HeroPage />
        <Container className={styles.heroDetaiilsSection}>
          <div className={styles.foundationDetaiilsSection}>
            <h2>Welcome to [Foundation Name]</h2>
            <p>
              At [Foundation Name], we are driven by the belief that everyone
              deserves a chance at a better life. Our foundation is dedicated to
              uplifting the poor, supporting the needy, and empowering young
              girls growing up on the streets. Through compassion, advocacy, and
              action, we strive to create a positive impact on the lives of
              those in need.
            </p>
          </div>
          <div className={styles.learnMoreSection}>
            {/* <p></p> */}
            <Link href="/">
              {" "}
              <Button> Learn More</Button>
            </Link>
          </div>
          <div className={styles.heroImgSection}>
            <img src="images/heroImage.png" alt="" />
          </div>
        </Container>

        {/* /* /////////WHO WE ARE SECTION///////// */}

        <Container className={styles.WhoWeAreSection}>
          <div className={styles.whoWeAreDetailSection}>
            <div className={styles.whoWeAreDetailSectionHeader}>
              <h2>Who we are</h2>
              <div className={styles.whoWeAreDetailLinksSection}>
                <ul>
                  <li>
                    <Link href="/"> Empowering Lives</Link>
                  </li>
                  <li>
                    {/* <div className={styles.dot}></div> */}
                    <Link href="/">Creating Hope</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.ourPurposeDetailSection}>
              <p>
                We aim to break the cycle of poverty by providing comprehensive
                support that addresses the unique challenges faced by
                individuals and communities. From financial assistance to
                educational opportunities, we are committed to making a lasting
                difference.
              </p>
            </div>
            <div className={styles.aboutUsButtonSection}>
              <Link href="/">
                {" "}
                <Button> About us</Button>
              </Link>
            </div>
          </div>

          <div className={styles.WhoWeAreImgSection}>
            <img src="images/who-we-are.png" alt="" />
          </div>
        </Container>

        {/* /* /////////END OF WHO WE ARE SECTION///////// */}

        {/* /* /////////OUR PROGRAMS SECTION///////// */}

        <div className={styles.ourProgram}>
          <Container className={styles.ourProgramSection}>
            <div className={styles.ourProgramHeaderSection}>
              <h4>Our Programs</h4>
            </div>

            <div className={styles.programsContainer}>
              <div className={styles.program}>
                <div className={styles.programImg}>
                  <img src="images/child-support.png" alt="" />
                </div>

                <div className={styles.programDetails}>
                  <div className={styles.ourProgramDetailSection}>
                    <div className={styles.ourProgramDetailSectionHeader}>
                      <h2>THE GIRL CHILD SUPPORT</h2>
                    </div>
                    <div className={styles.ourProgramDetailSection}>
                      <p>
                        Ensuring girls have access to education, healthcare, and
                        opportunities for growth to break barriers and fulfill
                        their potential.
                      </p>
                    </div>
                    <div className={styles.ourProgramButtonSection}>
                      <Link href="/">
                        <Button> Learn more</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.program}>
                <div className={styles.programImg}>
                  <img src="images/child-support.png" alt="" />
                </div>

                <div className={styles.programDetails}>
                  <div className={styles.ourProgramDetailSection}>
                    <div className={styles.ourProgramDetailSectionHeader}>
                      <h2>PRISON FAIR</h2>
                    </div>
                    <div className={styles.ourProgramDetailSection}>
                      <p>
                        Advocating for fairness, rehabilitation, and improved
                        conditions within the prison system to inspire positive
                        change.
                      </p>
                    </div>
                    <div className={styles.ourProgramButtonSection}>
                      <Link href="/">
                        {" "}
                        <Button> Learn more</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.program}>
                <div className={styles.programImg}>
                  <img src="images/elderly-support.png" alt="" />
                </div>

                <div className={styles.programDetails}>
                  <div className={styles.ourProgramDetailSection}>
                    <div className={styles.ourProgramDetailSectionHeader}>
                      <h2> ELDERLY SUPPORT</h2>
                    </div>
                    <div className={styles.ourProgramDetailSection}>
                      <p>
                        Providing companionship, assistance, and resources to
                        enhance the quality of life for senior citizens in our
                        community. Learn more
                      </p>
                    </div>
                    <div className={styles.ourProgramButtonSection}>
                      <Link href="/">
                        {" "}
                        <Button> Learn more</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.program}>
                <div className={styles.programImg}>
                  <img src="images/feed-100.png" alt="" />
                </div>

                <div className={styles.programDetails}>
                  <div className={styles.ourProgramDetailSection}>
                    <div className={styles.ourProgramDetailSectionHeader}>
                      <h2>FEED 100 FAMILIES FOR XMAS</h2>
                    </div>
                    <div className={styles.ourProgramDetailSection}>
                      <p>
                        Bringing warmth and joy by providing festive meals and
                        essential groceries to 100 families facing food
                        insecurity during the holiday season.
                      </p>
                    </div>
                    <div className={styles.ourProgramButtonSection}>
                      <Link href="/">
                        {" "}
                        <Button> Learn more</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* //////////TEAM////////// */}
        <div className={styles.meetTheTeamSection}>
          <Container className={styles.teamSection}>
            {" "}
            <div className={styles.teamSectionHeader}>
              <h4>Meet the team</h4>
            </div>
            <div className={styles.team}>
              <div className={styles.teamPersonnel}>
                <div className={styles.personnelImg}>
                  <img src="images/mary.png" alt="" />
                </div>
                <div className={styles.personnelName}>
                  <h4>MARY ENIYE OMOZUSI</h4>
                </div>
                <div className={styles.personnelPosition}>
                  <p>CEO</p>
                </div>
                <div className={styles.personnelSocialMediaHandle}>
                  <Link href="/">
                    {" "}
                    <img src="images/LinkedIn svg.png" alt="" />
                  </Link>
                </div>
              </div>
              {/* <-----TEAM personnel SECTION -------> */}
              <div className={styles.teamPersonnel}>
                <div className={styles.personnelImg}>
                  <img src="images/girl support.png" alt="" />
                </div>
                <div className={styles.personnelName}>
                  <h4>THE GIRL CHILD SUPPORT</h4>
                </div>
                <div className={styles.personnelPosition}>
                  <p>VOLUNTEER</p>
                </div>
                <div className={styles.personnelSocialMediaHandle}>
                  <Link href="/">
                    {" "}
                    <img src="images/LinkedIn svg.png" alt="" />
                  </Link>
                </div>
              </div>
              {/* <-----TEAM personnel SECTION -------> */}{" "}
              <div className={styles.teamPersonnel}>
                <div className={styles.personnelImg}>
                  <img src="images/girl support.png" alt="" />
                </div>
                <div className={styles.personnelName}>
                  <h4>THE GIRL CHILD SUPPORT</h4>
                </div>
                <div className={styles.personnelPosition}>
                  <p>VOLUNTEER</p>
                </div>
                <div className={styles.personnelSocialMediaHandle}>
                  <Link href="/">
                    {" "}
                    <img src="images/LinkedIn svg.png" alt="" />
                  </Link>
                </div>
              </div>
              {/* <-----TEAM personnel SECTION -------> */}
              <div className={styles.teamPersonnel}>
                <div className={styles.personnelImg}>
                  <img src="images/mary.png" alt="" />
                </div>
                <div className={styles.personnelName}>
                  <h4>THE GIRL CHILD SUPPORT</h4>
                </div>
                <div className={styles.personnelPosition}>
                  <p>VOLUNTEER</p>
                </div>
                <div className={styles.personnelSocialMediaHandle}>
                  <Link href="/">
                    {" "}
                    <img src="images/LinkedIn svg.png" alt="" />
                  </Link>
                </div>
              </div>
              {/* <-----TEAM personnel SECTION -------> */}
              <div className={styles.teamPersonnel}>
                <div className={styles.personnelImg}>
                  <img src="images/girl support.png" alt="" />
                </div>
                <div className={styles.personnelName}>
                  <h4>THE GIRL CHILD SUPPORT</h4>
                </div>
                <div className={styles.personnelPosition}>
                  <p>VOLUNTEER</p>
                </div>
                <div className={styles.personnelSocialMediaHandle}>
                  <Link href="/">
                    {" "}
                    <img src="images/LinkedIn svg.png" alt="" />
                  </Link>
                </div>
              </div>
              {/* <-----TEAM personnel SECTION -------> */}
              <div className={styles.teamPersonnel}>
                <div className={styles.personnelImg}>
                  <img src="images/girl support2.png" alt="" />
                </div>
                <div className={styles.personnelName}>
                  <h4>THE GIRL CHILD SUPPORT</h4>
                </div>
                <div className={styles.personnelPosition}>
                  <p>VOLUNTEER</p>
                </div>
                <div className={styles.personnelSocialMediaHandle}>
                  <Link href="/">
                    {" "}
                    <img src="images/LinkedIn svg.png" alt="" />
                  </Link>
                </div>
              </div>
              {/* <-----TEAM personnel SECTION -------> */}
              <div className={styles.teamPersonnel}>
                <div className={styles.personnelImg}>
                  <img src="images/girl support2.png" alt="" />
                </div>
                <div className={styles.personnelName}>
                  <h4>THE GIRL CHILD SUPPORT</h4>
                </div>
                <div className={styles.personnelPosition}>
                  <p>VOLUNTEER</p>
                </div>
                <div className={styles.personnelSocialMediaHandle}>
                  <Link href="/">
                    {" "}
                    <img src="images/LinkedIn svg.png" alt="" />
                  </Link>
                </div>
              </div>
              {/* <-----TEAM personnel SECTION -------> */}
              <div className={styles.teamPersonnel}>
                <div className={styles.personnelImg}>
                  <img src="images/mary.png" alt="" />
                </div>
                <div className={styles.personnelName}>
                  <h4>THE GIRL CHILD SUPPORT</h4>
                </div>
                <div className={styles.personnelPosition}>
                  <p>VOLUNTEER</p>
                </div>
                <div className={styles.personnelSocialMediaHandle}>
                  <Link href="/">
                    {" "}
                    <img src="images/LinkedIn svg.png" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* ///////A LITTLE DETAIL ABOUT US///////// */}

        <div className={styles.aLittleDetailAboutUs}>
          <Container className={styles.ourThoughtsOnSecuritysection}>
            <div className={styles.ourThoughtsOnSecurityDetailsection}>
              <div className={styles.ourThoughtsOnSecuritysectionHeader}>
                <h4>Secure and Transparent Commitment</h4>
              </div>
              <div className={styles.ourThoughtsOnSecuritySubSection}>
                <h2>
                  At [Foundation Name], we prioritize security and truth. Your
                  support is built on trust, honesty, and a commitment to making
                  a positive impact.
                </h2>
              </div>
            </div>
          </Container>
        </div>

        <Footer />

        {/* ////////HOMEPAGE END/////// */}
      </div>
    </main>
  );
}
