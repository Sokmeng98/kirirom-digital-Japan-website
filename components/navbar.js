import Link from "next/link";
import styles from "./navbar.module.css";
import linkStyles from "./MenuModal.module.css";
import isAtTop from "../hooks/isAtTop";
import { MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Dropdown from "./Dropdown";

export default function navbar() {
  const isTop = isAtTop();
  const router = useRouter();
  const isActive = (pathname) => router.pathname === pathname;

  const [applySpecialStyle, setApplySpecialStyle] = useState(false);
  const container = {
    hidden: { opacity: 0, y: -50 }, // Start from slightly above
    visible: {
      opacity: 1,
      y: 0, // End at natural position
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
        when: "beforeChildren", // Ensure children animate after the container has moved
        type: "spring", // This gives a nice smooth effect
        stiffness: 100, // Adjust the stiffness for more or less "bounce"
      },
    },
  };

  useEffect(() => {
    // This function runs when the component mounts and anytime the route changes.
    const handleRouteChange = () => {
      // Check if the current route is not the homepage.
      const routes = ["/", "/about-us", "/recruitment"];
      const isNotHome = !routes.includes(router.pathname);

      setApplySpecialStyle(isNotHome);
    };

    // Run the check initially and subscribe to route changes.
    handleRouteChange();
    router.events.on("routeChangeComplete", handleRouteChange);

    // Clean up the event listener when the component unmounts.
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.pathname, router.events]);

  return (
    <header className="sticky-top">
      <motion.nav
        variants={container}
        initial="hidden"
        animate="visible"
        className={`${styles.navBar} ${
          isTop ? "text-[#091C3E]" : "bg-[#091C3E] text-white"
        } navbar navbar-expand-md ${
          applySpecialStyle ? "text-white" : "text-[#091C3E]"
        }`}
      >
        <div className="sm:mx-4 md:mx-16 px-3 flex w-full justify-between items-center ">
          <div className="flex items-center mb-0">
            <Link href="/" className=" flex justify-center items-center">
              <img
                src="/images/kdclogo.png"
                width="400"
                className="object-cover w-56 lg:w-48 xl:w-56"
                alt="logo"
              />
              {/* <p className="font-bold">Kirirom Digital</p> */}
            </Link>
          </div>

          <div
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#menuModal"
            style={{ zIndex: 99 }}
            className="block nav:hidden"
          >
            <MenuIcon size={24} />
          </div>
          <div className="hidden nav:flex items-center gap-4 text-sm">
            <Link
              className={`hover:underline decoration-2 underline-offset-8	${
                isTop ? "text-[#091C3E]" : " text-white"
              } ${applySpecialStyle ? "text-white" : "text-[#091C3E]"} ${
                isActive("/") ? "underline " : " "
              }`}
              href="/"
            >
              {" "}
              ホーム
            </Link>
            <Link
              className={`hover:underline decoration-2 underline-offset-8	${
                isTop ? "text-[#091C3E]" : " text-white"
              } ${applySpecialStyle ? "text-white" : "text-[#091C3E]"} ${
                isActive("/about-us") ? "underline " : " "
              }`}
              href="/about-us"
            >
              {" "}
              会社情報
            </Link>

            <Link
              className={`hover:underline  decoration-2 underline-offset-8	${
                isTop ? "text-[#091C3E]" : " text-white"
              } ${applySpecialStyle ? "text-white" : "text-[#091C3E]"} ${
                isActive("/news") ? "underline " : " "
              }`}
              href="/news"
            >
              {" "}
              ニュース
            </Link>
            <Link
              className={`hover:underline decoration-2 underline-offset-8	${
                isTop ? "text-[#091C3E]" : " text-white"
              } ${applySpecialStyle ? "text-white" : "text-[#091C3E]"} ${
                isActive("/recruitment") ? "underline " : " "
              }`}
              href="/recruitment"
            >
              {" "}
              エンジニア募集
            </Link>
            <Dropdown
              title="関連サイト"
              isTop={isTop}
              applySpecialStyle={applySpecialStyle}
            >
              <Link
                className={`${"hover:underline decoration-2 underline-offset-8 ease-in duration-100"} `}
                href="https://kgforum.info/"
              >
                {" "}
                Kirirom Global Forum
              </Link>
              <Link
                className={`${"hover:underline decoration-2 underline-offset-8 ease-in duration-100"} `}
                href="https://peerlearninghub.life/"
              >
                {" "}
                ピアラーニングハブ
              </Link>
            </Dropdown>
            <Link
              className="px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              href="https://docs.google.com/forms/d/e/1FAIpQLSeMKqHAhG5nAAxcAqfcslw_pXChXh5ZOSi8wjFGFyJvpmqgDg/viewform?usp=send_form"
            >
              {" "}
              Contact Us
            </Link>
          </div>
        </div>
      </motion.nav>
    </header>
  );
}
