import { ArrowRightIcon } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Section2 from "../components/SubPage/Recruitment/Section2";
import TechnologyStack from "../components/SubPage/Recruitment/TechnologyStack";
import Image from "next/image";

const recruitment = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="日本のシステム開発を英語化するキリロムデジタル"
        />
        <meta property="og:site_name" content="キリロムデジタル" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Recruitment | Kirirom Digital (キリロムデジタル)"
        />
        <meta
          property="og:description"
          content="日本のシステム開発を英語化するキリロムデジタル"
        />
        <meta property="og:url" content="https://www.kirirom-digital.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kiriromdigital" />
        <meta property="fb:app_id" content="237205442772220" />
      </Head>
      <div className="py-5 px-3 flex flex-col justify-center items-center sm:mx-4 md:mx-16 ">
        <div className="py-3"></div>
        {/* hero section */}
        <main className="w-full   ">
          {/* text section */}

          <div className="flex flex-col md:flex-row justify-center items-center ">
            <div className="w-full md:w-1/2 mx-2">
              <div className="flex flex-col justify-center items-center md:items-start">
                <h2 className="w-fit text-xl md:text-4xl py-3 text-[#091C3E] font-bold">
                  世界で活躍するエンジニアへ
                </h2>
                <h2 className="w-fit text-xl md:text-4xl text-[#091C3E] font-bold">
                  第一歩をここから
                </h2>
                <p className="w-fit text-gray-500 py-4 ">
                  キリロムデジタルは、多国籍のエンジニアチームで世界中のシステム開発プロジェクトをデリバリーするプロフェッショナル集団です。英語力とグローバルコミュニケーション能力を伸ばしたい日本人エンジニアにとって理想的な環境です。まずは気軽にエントリーを！
                </p>
              </div>

              <div className="w-full flex md:justify-start justify-center items-center">
                <Link
                  href={"https://forms.gle/eawgWd3iFhw8hjbn6"}
                  target="_blank"
                  className="bg-red-600 w-fit text-white px-5 py-2 rounded-lg flex justify-end items-end gap-2"
                >
                  <span>Apply Now</span>
                  <span>
                    <ArrowRightIcon size={20} />
                  </span>
                </Link>
              </div>
            </div>
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex h-[450px] gap-2 justify-center items-center mt-5">
              {/* col1 */}
              <div className="h-100 flex flex-col gap-2">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  src="/images/manager01.webp"
                  alt="manager01"
                  className="w-36 h-1/2 rounded-lg object-cover"
                />
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  src="/images/manager02.jpg"
                  alt="manager01"
                  className="w-36 h-1/2 rounded-lg object-cover"
                />
              </div>
              {/* col 2  */}
              <div className="flex flex-col gap-2">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  src="/images/manager03.webp"
                  alt="manager01"
                  className="w-36 h-[145px]  rounded-lg object-cover"
                />
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  src="/images/manager04.webp"
                  alt="manager01"
                  className="w-36 h-[140px] rounded-lg object-cover"
                />
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  src="/images/manager06.webp"
                  alt="manager01"
                  className="w-36 h-[145px]  rounded-lg object-cover"
                />
              </div>
              {/* col3 */}
              <div className="h-100 flex flex-col gap-2 ">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  src="/images/manager05.webp"
                  alt="manager01"
                  className="w-36 h-1/2 rounded-lg object-cover "
                />
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  src="/images/manager07.webp"
                  alt="manager01"
                  className="w-36 h-1/2 rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
          {/* section 2 */}
          <Section2 />
          <TechnologyStack />
          <div className="w-full mt-10 flex  justify-center items-center">
            <Link
              href={"https://forms.gle/eawgWd3iFhw8hjbn6"}
              target="_blank"
              className="bg-red-600 w-fit text-white px-5 py-2 rounded-lg flex justify-end items-end gap-2"
            >
              <span>Apply Now</span>
              <span>
                <ArrowRightIcon size={20} />
              </span>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default recruitment;
