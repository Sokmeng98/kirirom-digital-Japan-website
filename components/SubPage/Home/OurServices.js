import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from 'next/image'

const work = [
  {
    title: "月間600億レコードの大規模データ分析基盤構築",
    desc: "独立行政法人が開発したIoTデバイスが生成する位置情報を蓄積し分析するデータ基盤システム。月間600億レコード程度のデータ分析基盤を構築。リアルタイムでIoTデバイスの位置情報導線やヒートマップなどを提示するシステム",
    img: "/images/work1.png",
  },
  {
    title: "予兆AI開発",
    desc: "大規模施設でのハードウェアの故障を予兆するAIロジックの開発。各機材の12時間後にエラーが起きる確率を算出し、事前にアラートを出すことができるAIを開発",
    img: "/images/work2.png",
  },
  {
    title: "建設現場向けウェアラブルデバイスシステム",
    desc: "建築現場の従業員にBluetooth生体データ取得シャツを着用してもらい、心拍数などのデータより管理者にアラートを上げるシステム開発",
    img: "/images/work3.png",
  },
  {
    title: "大規模メタバース空間の保守開発",
    desc: "国内有数の大規模メタバース空間内の広告配信システムの保守開発運用。最新バージョンのUnreal Engineにも対応可能な体制が整っています",
    img: "/images/work4.png",
  },
  {
    title: "大手花材企業向けECサイト構築",
    desc: "メーカ、問屋、小売店を繋いだECサイトシステム。一般的なEC機能に加え、それぞれの商流に応じた手数料設定機能や運賃設定など複雑な業務要件にも対応。外国向け米ドル金額設定や外国送付宛先印字機能等越境にも対応",
    img: "/images/work5.png",
  },
];

export default function OurServices() {
  const teamCardRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const generateAnimation = (direction, magnitude) => {
    let start = { opacity: 0 };
    start[direction] = magnitude; // Dynamically assign the start position based on direction and magnitude

    return {
      hidden: start,
      visible: {
        opacity: 1,
        [direction]: 0, // Move to the natural position
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.5,
          type: "spring",
          stiffness: 100,
        },
      },
    };
  };

  const left2right = generateAnimation("x", -50);
  const right2left = generateAnimation("x", 50);
  const bottom2top = generateAnimation("y", 50);
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const checkAndUpdateButtonVisibility = () => {
    if (teamCardRef.current) {
      const maxScrollLeft =
        teamCardRef.current.scrollWidth - teamCardRef.current.clientWidth;
      setShowLeftButton(teamCardRef.current.scrollLeft > 0);
      setShowRightButton(teamCardRef.current.scrollLeft + 1 < maxScrollLeft);
    }
  };
  useEffect(() => {
    const teamCardElement = teamCardRef.current;
    // Check button visibility initially and on scroll
    checkAndUpdateButtonVisibility();
    teamCardElement.addEventListener("scroll", checkAndUpdateButtonVisibility);

    // Return cleanup function to remove event listener
    return () =>
      teamCardElement.removeEventListener(
        "scroll",
        checkAndUpdateButtonVisibility
      );
  }, []);

  const handleScrollLeft = () => {
    if (teamCardRef.current && showLeftButton) {
      teamCardRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (teamCardRef.current && showRightButton) {
      teamCardRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <motion.div className="sm:mx-4 md:mx-16 px-2" ref={ref}>
      <div className="flex gap-4 flex-wrap">
        <motion.div
          variants={left2right}
          initial="hidden"
          animate={controls}
          className="flex flex-col justify-start items-start flex-wrap"
        >
          <div className="w-fit">
            <h1 className="text-lg md:text-2xl lg:text-4xl text-[#091C3E] font-bold">
              Work
            </h1>
            <div className="h-1 w-full rounded-full bg-red-600 mt-1 mb-2"></div>
          </div>
          <p className="text-sm md:text-base lg:text-lg w-full">
            データベース構築、AI、IoTからWEBシステム、モバイルアプリ開発まで50以上のプロジェクト実績があります
          </p>
        </motion.div>
        <motion.div
          variants={right2left}
          initial="hidden"
          animate={controls}
          className="flex justify-center items-center gap-3 ml-auto"
        >
          <div
            className={`rounded-full p-2 md:p-3 cursor-pointer ${
              showLeftButton
                ? "bg-[#091C3E] text-white"
                : "bg-white  text-[#091C3E]"
            }`}
            onClick={handleScrollLeft}
            disabled={!showLeftButton}
          >
            <ArrowLeftIcon className="w-3 md:w-5 h-3 md:h-5" />
          </div>
          <div
            className={`rounded-full p-2 md:p-3 cursor-pointer ${
              showRightButton
                ? "bg-[#091C3E] text-white"
                : "bg-white  text-[#091C3E]"
            }`}
            onClick={handleScrollRight}
            disabled={!showRightButton}
          >
            <ArrowRightIcon className="w-3 md:w-5 h-3 md:h-5" />
          </div>
        </motion.div>
      </div>
      {/* card  */}
      <motion.div
        variants={bottom2top}
        initial="hidden"
        animate={controls}
        className="my-3"
      >
        <div
          className="flex px-2 py-4 justify-start items-stretch h-auto overflow-hidden overflow-x-scroll flex-row scrollbar-hide gap-3 "
          ref={teamCardRef}
        >
          {work.map((item, index) => (
            <div
              key={index}
              className="flex min-w-80 flex-col gap-4 md:hover:shadow-md p-3 rounded-lg shadow-md border-red-100  border bg-white  transition duration-300 md:hover:scale-105"
            >
              <Image
                width={0}
                height={0}
                sizes="100vw"
                src={item.img}
                alt={item.title}
                className="rounded-md h-40 object-cover w-full"
              />

              <h3 className="text-sm md:text-lg lg:text-xl font-bold">
                {item.title}
              </h3>
              <p className="text-sm md:text-base lg:text-lg pt-1 text-gray-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
