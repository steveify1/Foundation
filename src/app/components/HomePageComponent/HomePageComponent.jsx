import Image from "next/image";
import Link from "next/link";
import styles from "./HomePageComponent.module.scss";
import Nav from "../Nav/Nav";
import Button from "../Button/Button";
import { Container } from "../Container/Container";
import Footer from "../Footer/Footer";

const teammates = [
  {
    name: "Mary Eniye Omozusi",
    position: "CEO",
    program: "EOF",
    img: "images/mary-headshot.png",
    socialMediaHandle: "https://www.linkedin.com/in/mary-omozusi-81b2b0277/",
  },
  {
    name: "Nwakasi Stephen",
    position: "IT Support",
    program: "EOF",
    img: "images/nwakasi-stephen-headshot.jpeg",
    socialMediaHandle: "https://www.linkedin.com/in/stephen-nwakasi-402268163/",
  },
  {
    name: "John Doe",
    position: "Volunteer",
    program: "The Girl Child Support",
    img: "images/girl-support.png",
    socialMediaHandle: "images/linkedin.png",
  },
  {
    name: "John",
    position: "Volunteer",
    program: "The Girl Child Support",
    img: "images/girl-support2.png",
    socialMediaHandle: "images/linkedin.png",
  },
  {
    name: "John",
    position: "Volunteer",
    program: "The Girl Child Support",
    img: "images/girl-support.png",
    socialMediaHandle: "images/linkedin.png",
  },
  {
    name: "John",
    position: "Volunteer",
    program: "The Girl Child Support",
    img: "images/girl-support2.png",
    socialMediaHandle: "images/linkedin.png",
  },
  {
    name: "John",
    position: "Volunteer",
    program: "The Girl Child Support",
    img: "images/mary-headshot.png",
    socialMediaHandle: "images/linkedin.png",
  },
  {
    name: "John",
    position: "Volunteer",
    program: "The Girl Child Support",
    img: "images/nwakasi-stephen-headshot.jpeg",
    socialMediaHandle: "images/linkedin.png",
  },
]

export default function HomePage() {
  return (
    <main>
      <Nav />
      <div className={styles.homePageSection}>
        <div  className={styles.heroDetaiilsSection}>
          <Container className={styles.heroDetaiilsSection}>
            <div className={styles.foundationDetaiilsSection}>
              {/* <h1>Give life a purpose</h1> */}
              <h1>Eniye Omozusi Foundation</h1>
              <p>
                At Eniye Omozusi Foundation, we are driven by the belief that everyone
                deserves a chance at a better life. Our foundation is dedicated to
                uplifting the poor, supporting the needy, and empowering young
                girls growing up on the streets. Through compassion, advocacy, and
                action, we strive to create a positive impact on the lives of
                those in need.
              </p>

              <div className={styles.learnMoreSection}>
                <Link href="/">
                  {" "}
                  <Button> Learn More</Button>
                </Link>
              </div>
            </div>
            <div className={styles.heroImgSection}>
              <img src="images/heroImage.png" alt="" />
            </div>
          </Container>
        </div>

        {/* /* /////////WHO WE ARE SECTION///////// */}

        <Container className={styles.whoWeAreSection}>
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
            
            <p className={styles.ourPurposeDetailSection}>
              We aim to break the cycle of poverty by providing comprehensive
              support that addresses the unique challenges faced by
              individuals and communities. From financial assistance to
              educational opportunities, we are committed to making a lasting
              difference.
            </p>

            <div className={styles.aboutUsButtonSection}>
              <Link href="/">
                {" "}
                <Button> About us</Button>
              </Link>
            </div>
          </div>

          <div className={styles.whoWeAreImgSection}>
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
                      <h2>PRISON FARE</h2>
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
            <div className={styles.teamSectionHeader}>
              <h4>Meet the team</h4>
            </div>

            <ul className={styles.team}>
              {teammates.map((teammate, i) => (
                <li
                  className={styles.teamPersonnel}
                  key={`teammate-${i}`}
                >
                  <div className={styles.personnelImg}>
                    <img src={teammate.img} alt={teammate.name} />
                  </div>

                  <div>
                    <h4 className={styles.personnelName}>{teammate.name}</h4>
                    <p className={styles.personnelPosition}>{teammate.position}</p>
                  </div>
              
                  <Link href={teammate.socialMediaHandle} className={styles.personnelSocialMediaHandle}>
                    <img src="images/linkedin.png" alt="" />
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </div>

        {/* ///////A LITTLE DETAIL ABOUT US///////// */}

        <Container className={styles.aLittleDetailAboutUs}>
          <div className={styles.ourThoughtsOnSecuritysection}>
            <div className={styles.ourThoughtsOnSecurityDetailsection}>
              <div className={styles.ourThoughtsOnSecuritysectionHeader}>
                <h4>Secure and Transparent Commitment</h4>
              </div>
              <div className={styles.ourThoughtsOnSecuritySubSection}>
                <h2>
                  At the Eniye Omozusi Foundation, we prioritize security and truth. Your
                  support is built on trust, honesty, and a commitment to making
                  a positive impact.
                </h2>
              </div>
            </div>
          </div>
        </Container>

        <Footer />

        {/* ////////HOMEPAGE END/////// */}
      </div>
    </main>
  );
}
