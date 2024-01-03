import styles from "./Footer.module.scss";
import Button from "../Button/Button";
import { Container } from "../Container/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <main>
      <div className={styles.footerSection}>
        <Container className={styles.footer}>
          <div className={styles.footerTopTierMenuSection}>
            <div className={styles.footerHeader}>
              <h4>Get Involved</h4>
            </div>

            <div className={styles.footerTopTierSection}>
              <div className={styles.donationSection}>
                <div className={styles.donationTextSection}>
                  <div className={styles.donationSectionTitle}>
                    <h2>Donation</h2>
                  </div>
                  <div className={styles.donationDetailsSection}>
                    Contribute to our cause and help us continue our vital work.
                    Your donation makes a direct impact on [describe the
                    outcomes or areas your donations support].
                  </div>
                </div>

                <div className={styles.donationLinkSection}>
                  <Button>
                    <a href="">Donate</a>
                  </Button>
                </div>
              </div>

              <div className={styles.donationSection}>
                <div className={styles.donationTextSection}>
                  <div className={styles.donationSectionTitle}>
                    <h2>Volunteer</h2>
                  </div>
                  <div className={styles.donationDetailsSection}>
                    Join our dedicated team of volunteers and be a part of the
                    change you want to see. Find opportunities to contribute
                    your time and skills.
                  </div>
                </div>

                <div className={styles.donationLinkSection}>
                  <Button>
                    {" "}
                    <a href="">Volunteer</a>
                  </Button>
                </div>
              </div>

              <div className={styles.donationSection}>
                <div className={styles.donationTextSection}>
                  {" "}
                  <div className={styles.donationSectionTitle}>
                    <h2>Spread the word</h2>
                  </div>
                  <div className={styles.donationDetailsSection}>
                    Help raise awareness about [Your NGO Name] and our mission.
                    Follow us on social media, share our content, and be an
                    advocate for positive change.
                  </div>
                </div>

                <div className={styles.donationLinkSection}>
                  <Button>
                    {" "}
                    <a href="">Share</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footerBottomTierSection}>
            <div className={styles.footerBottomSection}>
              <div className={styles.programContainer}>
                <div className={styles.programHeaderContainer}>
                  <h2>Programs</h2>
                </div>
                <div className={styles.programMenuLinkContainer}>
                  <ul>
                    <li>
                      <a href="">The girl child support</a>
                    </li>

                    <li>
                      <a href="">Prison fare</a>
                    </li>

                    <li>
                      <a href="">Elderly support</a>
                    </li>
                    <li>
                      <a href="">Feed 100 families for xmas</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* /////////ADDRESS/////////// */}

            <div className={styles.addressContainer}>
              <div className={styles.addressContainerHeader}>
                <h2>Address</h2>
              </div>
              <div className={styles.address}>
                <p>House 7, Adeleke Estate, Lagos</p>
              </div>
            </div>

            <div className={styles.contactSection}>
              <div className={styles.contactSectionHeader}>
                <h2>Contact Us</h2>
              </div>

              <div className={styles.contactMenuContainer}>
                <ul>
                  <li>
                    <Link href="tel:+2347039034376">+234 703 903 4376</Link>
                  </li>
                  <li>
                    <Link
                      href="mailto:theeniyeomozusifoundation@gmail.com"
                    >
                      theeniyeomozusifoundation@gmail.com
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/company/the-eniye-omozusi-foundation/"
                      target="_blank"
                    >
                      LinkedIn
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://twitter.com/ENIYEFOUNDATION"
                      target="_blank"
                    >
                      X (Twitter)
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      href="https://www.linkedin.com/company/the-eniye-omozusi-foundation/"
                      target="_blank"
                    >
                      Instagram
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>

            {/* ////////// SIGN UP SECTION////////// */}
            <div className={styles.SignUpSection}>
              <div className={styles.SignUpDetailsSection}>
                <div className={styles.SignUpDetailSubSection}>
                  <p>
                    Sign up for our newsletter to stay informed, inspired, and
                    engaged in creating positive change!
                  </p>
                </div>
                <div className={styles.SignUpDetailHeaderSection}>
                  <h5>Sign up for our newsletter</h5>
                </div>

                <div className={styles.SignUpDetailEmailSection}>
                  <input
                    className={styles.signUp}
                    type="email"
                    placeholder="Enter email"
                  />
                  <div className={styles.signUpButtonSection}>
                    <Button>
                      <a href="">Sign up</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}
