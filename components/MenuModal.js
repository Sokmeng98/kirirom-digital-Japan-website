import styles from "./MenuModal.module.css";
import navStyles from "./navbar.module.css";
import Link from "next/link";

const menu = [
  {
    title: "ホーム",
    link: "/",
  },
  {
    title: "会社情報",
    link: "/about-us",
  },
  {
    title: "ニュース",
    link: "/news",
  },
  {
    title: "エンジニア募集",
    link: "/recruitment",
  },
  {
    title: "Kirirom Global Forum",
    link: "https://kgforum.info/",
  },
  {
    title: "ピアラーニングハブ",
    link: "https://peerlearninghub.life/",
  },
];

export default function MenuModal() {
  return (
    <div
      className="modal fade"
      id="menuModal"
      tabIndex={-1}
      aria-labelledby="menuModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog max-w-96 modal-fullscreen">
        <div className="modal-content">
          <div
            className="mx-8 flex items-end justify-end pt-4"
            style={{ borderBottom: 0 }}
          >
            <h5 className="modal-title" id="menuModalLabel"></h5>
            <div
              type="button"
              className="btnClose "
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
          </div>
          <div className="modal-body  flex-col flex justify-start items-start">
            <ul className={styles.listGroup}>
              {menu.map((item, index) => (
                <li
                  className={`${styles.listGroupItem}`}
                  key={index}
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  {item.title[0] === "/" ? (
                    <Link href={item.link} className={styles.navLink}>
                      {item.title}
                    </Link>
                  ) : (
                    <a href={item.link} className={styles.navLink}>
                      {item.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <div className="py-5" />
              <hr className="w-full h-[1px] bg-black rounded"/>
              <a
                href="https://forms.gle/BjSwLjdNo639nM85A"
                target="_blank"
                className={`${styles.contactUsBtn}`}
              >
                Contact Us
              </a>
          </div>
        </div>
      </div>
    </div>
  );
}
