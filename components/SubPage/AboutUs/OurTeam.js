import styles from "../../../pages/about-us.module.css";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import React from "react";

const teams = [
  {
    name: "H. SAKAGUCHI",
    position: "PROJECT MANAGER / QA",
    img: "/images/manager01.webp",
  },
  {
    name: "Y. KOSE",
    position: "PROJECT MANAGER",
    img: "/images/manager02.jpg",
  },
  {
    name: "YUKLIN",
    position: "UX/UI DESIGNER",
    img: "/images/manager03.webp",
  },
  {
    name: "VISAL",
    position: "SENIOR DEVELOPER",
    img: "/images/manager04.webp",
  },
  {
    name: "ALBIN",
    position: "SENIOR DEVELOPER",
    img: "/images/manager05.webp",
  },
  {
    name: "NANA",
    position: "FULLSTACK DEVELOPER",
    img: "/images/manager06.webp",
  },
  {
    name: "PANHABOT",
    position: "FULLSTACK DEVELOPER",
    img: "/images/manager07.webp",
  },
];

export default function OurTeam() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };
  const child_items = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
      },
    },
  };
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <section className="sm:mx-4 md:mx-16 px-2 bg-kd-primary" ref={ref}>
      <div className="d-flex flex-column justify-content-center items-center md:items-start">
        <div className="w-fit sm:pb-0 lg:pb-10">
          <h1 className="text-lg md:text-2xl lg:text-4xl text-white font-bold">
            MEET OUR TEAM
          </h1>
          <div className="h-1 w-full rounded-full bg-red-600 mt-1 mb-2"></div>
        </div>
      </div>

      <motion.div
        className="flex flex-wrap px-6 md:px-0"
        variants={container}
        initial="hidden"
        animate={controls}
      >
        {teams.map((team, index) => (
          <motion.div
            className="p-4 relative sm:w-1/2 md:w-1/2 lg:w-1/3 "
            key={index}
            variants={child_items}
          >
            <div className="md:grayscale md:hover:grayscale-0 ">
              <img src={team.img} alt={team.name} className=" rounded-t-lg" />
            </div>
            <div
              className={`absolute  bottom-6 left-6 right-6 bg-black bg-opacity-50 text-white p-2 ${styles.overlay}`}
            >
              <div className="ml-4 mt-2">
                <div className="sm:text-sm md:text-base  lg:text-2xl font-bold text-white">
                  {team.name}
                </div>
                <div className="sm:text-xs md:text-sm  lg:text-base text-gray-300">
                  {team.position}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
