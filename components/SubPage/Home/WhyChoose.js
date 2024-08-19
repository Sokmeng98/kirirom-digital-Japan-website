import Link from "next/link";
import {
  LanguageIcon,
  UserGroupIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";
import { ChevronRight, LinkIcon } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function WhyChoose() {
  // Trigger the animation when the component comes into view

  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const bottom2top = {
    hidden: { opacity: 0, y: 50 }, // Start from slightly below
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

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className="sm:mx-4 md:mx-16 px-2">
      <div className="row pb-5">
        <div className="col-12 d-flex flex-column justify-content-center align-items-center">
          <motion.div
            variants={bottom2top}
            initial="hidden"
            animate="visible"
            className="w-fit"
          >
            <h1 className="text-lg md:text-2xl lg:text-4xl text-[#091C3E] font-bold">
              キリロムデジタルが選ばれる理由
            </h1>
            <div className="h-1 w-full rounded-full bg-red-600 mt-1 mb-2"></div>
          </motion.div>
        </div>
        <motion.div variants={container} initial="hidden" animate="visible">
          {/* first row */}

          <div className="w-full mt-5 flex flex-col lg:flex-row items-stretch justify-between gap-4">
            {/* col one */}
            <motion.div variants={item} className="w-full">
              <div className="relative md:bg-white bg-[#091C3E] h-full flex flex-col justify-between w-full shadow-lg rounded-lg p-4 transition duration-300 md:hover:scale-105">
                <div className="flex justify-start items-center gap-2  ">
                  {/* icon */}
                  <div className="min-w-12 min-h-12 md:bg-[#091C3E] bg-[#fff] flex justify-center items-center rounded-lg">
                    <LanguageIcon className="h-7 w-7 text-[#091C3E] md:text-[#fff]" />
                  </div>
                  {/* text */}
                  <h3 className="md:text-xl lg:text-xl text-[#fff] md:text-[#091C3E]  font-bold">
                    プロジェクトを通じて開発キーマンの英語力が向上
                  </h3>
                </div>
                <TypeAnimation
                  sequence={[
                    "キリロムデジタルのシステム開発は多国籍チームで公用語が英語です。お客様に開発チームに参加していただくことで、英語での開発実務経験を積んでいただけます。将来的に世界中のエンジニアを使いこなす会社になるための最適なステップです。プロジェクトは日本人PMがリードするため現時点での英語力は不問。また言語の壁に起因する品質問題も起きません。",
                    700,
                  ]}
                  cursor={false}
                  wrapper="span"
                  speed={70}
                  repeat={0}
                  className="text-sm md:text-base lg:text-lg pt-4 text-[#fff] md:text-[#091C3E]"
                />
                {/* description */}
                <div className="flex items-end justify-end mt-4">
                  <Link
                    href={"https://www.kirirom-digital.com/about-us#our-team"}
                    target="_blank"
                    className="flex justify-center items-center gap-3 rounded-lg text-[#091C3E] md:text-[#fff] bg-[#fff] md:bg-[#091C3E] py-1 px-4 cursor-pointer"
                  >
                    <p className="text-xs md:text-sm">チーム</p>
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* col two */}
            <motion.div variants={item} className="w-full">
              <div className="relative bg-[#fff] md:bg-[#091C3E] flex flex-col h-full shadow-lg rounded-lg p-4 transition duration-300 md:hover:scale-105 min-h-52">
                <div className="flex justify-start items-center gap-2  ">
                  {/* icon */}
                  <div className="min-w-12 min-h-12 bg-[#091C3E] md:bg-[#fff] flex justify-center items-center rounded-lg">
                    <GlobeAltIcon className="h-7 w-7 text-[#fff] md:text-[#091C3E]" />
                  </div>
                  {/* text */}
                  <h3 className="md:text-xl lg:text-xl font-bold text-[#091C3E] md:text-[#fff] ">
                    プロダクトの英語化・海外展開を支援
                  </h3>
                </div>
                <TypeAnimation
                  sequence={[
                    "国内向けに開発されてきたITプロダクトの海外展開をご支援します。デザイン・多言語化・要件定義・機能開発を最小限の工数で最適化します。キリロムデジタルの持つグローバルネットワークや、海外展開ノウハウもご活用いただくことで、ビジネスの加速をトータルにご支援します。",
                    700,
                  ]}
                  cursor={false}
                  wrapper="span"
                  speed={70}
                  repeat={0}
                  className="text-sm md:text-base lg:text-lg pt-4 text-[#091C3E] md:text-[#fff]"
                />
              </div>
            </motion.div>
          </div>

          {/* second row */}
          <div className="w-full m-0 flex flex-col lg:flex-row items-stretch justify-between mt-4 gap-4">
            {/* col one */}
            <motion.div variants={item} className="w-full">
              <div className="relative bg-[#091C3E] flex flex-col h-full shadow-lg rounded-lg p-4 transition duration-300 md:hover:scale-105 min-h-52">
                <div className="flex justify-start items-center gap-2  ">
                  {/* icon */}
                  <div className="min-w-12 min-h-12 bg-[#fff] flex justify-center items-center rounded-lg">
                    <UserGroupIcon className="h-7 w-7 text-[#091C3E]" />
                  </div>
                  {/* text */}
                  <h3 className="md:text-xl lg:text-xl font-bold text-[#fff] ">
                    業務用途に応じた生成AI活用コンサルティング力
                  </h3>
                </div>
                <TypeAnimation
                  sequence={[
                    "ChatGPT、Gemini、Claude 3など、ニーズに応じて最適なLLMを選択しシステム開発に取り込んでいます。自社特有の業務を安全に生成AIに連携し、高いレベルでの業務改善を実現します。言語の壁を低くするのにも生成AIは有効で、多国籍開発チームでの生成AI活用の実績や実例を蓄積しています。",
                    700,
                  ]}
                  cursor={false}
                  wrapper="span"
                  speed={70}
                  repeat={0}
                  className="text-sm md:text-base lg:text-lg pt-4 text-[#fff]"
                />
              </div>
            </motion.div>
            {/* col two */}
            <motion.div variants={item} className="w-full">
              <div className="w-100 lg:w-50 h-full shadow-lg rounded-lg p-4 transition duration-300 md:hover:scale-105">
                <div className="flex items-center gap-3 justify-stretch ">
                  {/* icon */}
                  <div className="min-w-12 min-h-12 bg-[#091C3E] flex justify-center items-center rounded-lg">
                    <LinkIcon className="h-7 w-7 text-white" />
                  </div>
                  {/* text */}
                  <h3 className="md:text-xl lg:text-xl font-bold">
                    海外トップクラスの技術大学との連携
                  </h3>
                </div>
                {/* description */}
                <TypeAnimation
                  sequence={[
                    "海外トップクラスの技術大学と提携しており、先端技術を使った実証実験（PoC）を得意としています。過去にはNFTマーケットプレイスや、VRゲーム開発、衛星データをつかった自動運転、地域ペイメントなどを手掛けてきました。先端技術の情報収集力が高いため、日本語訳されていない最新情報にいち早く触れることができます。",
                    700,
                  ]}
                  cursor={false}
                  wrapper="p"
                  speed={70}
                  repeat={0}
                  className="text-sm md:text-base lg:text-lg pt-4 text-gray-500"
                />
                <div className="flex items-end justify-end gap-2 mt-4 ">
                  <Link
                    href={"https://kit.edu.kh/"}
                    target="_blank"
                    className="flex justify-center items-center gap-3 rounded-lg bg-[#091C3E] text-white py-1 px-4 cursor-pointer"
                  >
                    <p className="text-xs md:text-sm">提携大学</p>

                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
