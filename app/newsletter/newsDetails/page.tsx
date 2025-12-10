import { PiArrowLeft } from "react-icons/pi";
import styles from "./style.module.css";
import DisplayCard from "@/app/components/displayCard";

const HeroData = {
  title: "History Department Hosts Panel on Colonial Architecture",
  dept: "Arts & Humanities",
  timeStamp: "8min",
  dec: "Scholars discuss preservation, restoration and campus heritage in a public forum.",
  imgUrl: "",
};

const NewsletterDetails = () => {
  return (
    <DisplayCard>
      <nav className={styles.navbar}>
        <div className={styles.navContent}>
          <div className={styles.navLeft}>
            <div className={styles.forYou}>
              <span>
                <PiArrowLeft />
              </span>
            </div>
          </div>

          <div className={styles.navRight}>
            <button className={styles.menuBtn} title="More options">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="5" r="2" fill="currentColor" />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
                <circle cx="12" cy="19" r="2" fill="currentColor" />
              </svg>
            </button>
            <button className={styles.linkBtn} title="Copy link">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className={styles.shareBtn}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="18" cy="5" r="3" fill="currentColor" />
                <circle cx="6" cy="12" r="3" fill="currentColor" />
                <circle cx="18" cy="19" r="3" fill="currentColor" />
                <path
                  d="M8.59 13.51l6.83 3.98"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M15.41 6.51l-6.82 3.98"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              Share
            </button>
          </div>
        </div>
      </nav>
      <div>
        <div>
          <div>
            <span>{HeroData.dept}</span>
            <span>{HeroData.timeStamp}</span>
          </div>
          <h1>{HeroData.title}</h1>
          <h1>{HeroData.dec}</h1>
        </div>
        <div>{HeroData.imgUrl}</div>
      </div>
    </DisplayCard>
  );
};

export default NewsletterDetails;
