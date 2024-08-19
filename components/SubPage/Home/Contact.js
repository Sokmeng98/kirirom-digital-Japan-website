import Link from "next/link";
import styles from "../../../pages/index.module.css";

export default function Contact() {
  return (
    <div className="sm:mx-4 md:mx-16 px-2">
      <div className={styles.contactBG}>
        <div className="flex flex-col justify-center items-center h-56 ">
          <div
            className="text-lg md:text-2xl lg:text-4xl font-bold text-white"
            style={{ maxWidth: 700 }}
          >
            お問い合わせはこちらから
          </div>
          <div className="mt-5 rounded-md">
            <Link
              href="https://forms.gle/BjSwLjdNo639nM85A"
              className="bg-red-800 text-white py-2 px-4 rounded-md"
              style={{ display: "inline-block" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
