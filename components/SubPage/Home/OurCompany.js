import Link from "next/link";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import styles from "../../../pages/index.module.css";
import whyChooseStyles from "./WhyChoose.module.css";

export default function OurCompany() {
  return (
    <div className="container pt-4">
      <div className="row align-items-center pb-md-0">
        <div className={`col-md-6 px-4`}>
          {/* https://docs.lottiefiles.com/lottie-player/components/lottie-react */}
          <Player
            autoplay
            loop
            src="https://assets3.lottiefiles.com/packages/lf20_bjrp14gp.json"
          ></Player>
        </div>
        <div
          className={`col-md-6 px-4 py-4 d-flex flex-column align-items-center align-items-md-start position-static`}
        >
          <h5 className={whyChooseStyles.sectionTitle}>OUR COMPANY</h5>
          <p className={styles.ourCompanyDesc}>
            Kirirom Digital takes pride in offering high-quality services with
            quick turnaround times. All our staff in Japan are able to converse
            in English, and are equipped with the latest technology trends.
          </p>
          <div className={whyChooseStyles.ctaLink}>
            <Link href="/about-us">
              <span>About Us</span>
              <svg
                style={{ color: "#F22400", paddingBottom: 4, marginTop: 2 }}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h13M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
