import { motion } from "framer-motion";
import Image from "next/image";

const managementInfo = [
  {
    name: "猪塚 武 Takeshi Izuka",
    title: "代表取締役社長CEO",
    descJp:
      "アクセンチュアを経てアクセス解析のデジタルフォレスト社を起業し、その後事業売却。2011年にITと教育とエコツーリズムを融合したキリロムグループを創業。キリロム工科大学創業者。EOジャパン元会長。一般社団法人WAOJE前代表理事。",
    img: "/images/boardmem01.png",
  },
  {
    name: "百瀬 公朗 Kimio Momose",
    title: "取締役会長",
    descJp:
      "アンダーセンコンサルティング（現アクセンチュア）元パートナー。上智大学特任教授。米国の有力なIT製品を数多く日本に導入した実績を持つ。専門領域はデータサイエンス、プロセスマイニング、AI。",
    img: "/images/boardmem02.png",
  },
  {
    name: "石原 良太 Ryota Ishihara",
    title: "取締役副社長COO",
    descJp:
      "エン・ジャパン株式会社にて大阪拠点長、横浜拠点長、人材紹介事業企画部長などを歴任。2020年よりカンボジアに移住し、キリロムグループに参画。キリロムデジタル株式会社の前身であるA2Aデジタル事業部の立上げを担当。",
    img: "/images/boardmem03.png",
  },
  {
    name: "Jun Page",
    title: "取締役US事業統括",
    descJp:
      "米国ペンシルベニア大学卒業後、ARTHUR ANDERSEN、KPMGなどで経営コンサルティングとして従事。現在は株式会社ZEPHYROSの代表として、日本企業向けのグローバルコミュニケーショントレーニング、次世代グローバルリーダートレーニングなどを手掛ける。キリロムデジタルにはUS事業の責任者としてジョイン。",
    img: "/images/boardmem04.png",
  },
];

export default function Management() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.6,
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

  return (
    <section className="sm:mx-4 md:mx-16 px-2 bg-white text-kd-white md:mt-8 lg:mt-20 sm:mt-4">
      <div className="d-flex flex-column">
        <div className="w-fit">
          <h1 className="text-lg md:text-2xl lg:text-4xl text-[#091C3E] font-bold">
            役員
          </h1>
          <div className="h-1 w-full rounded-full bg-red-600 mt-1 mb-2"></div>
        </div>
      </div>

      {/* Management Details */}
      <section className="py-4 row">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap"
        >
          {managementInfo.map((item, index) => (
            <motion.div
              className="flex-grow-0 flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 my-2 px-2"
              key={index}
              variants={child_items}
            >
              <div className="bg-white border border-gray-200 cursor-pointer rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col h-full">
                <div className="relative" style={{ paddingBottom: "80%" }}>
                  <div className="absolute inset-0 md:grayscale md:hover:grayscale-0 rounded-t-lg">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      src={item.img}
                      alt={item.title}
                      className="absolute w-full h-full rounded-t-lg"
                      style={{ objectFit: "cover", objectPosition: "top" }}
                    />
                  </div>
                </div>
                <div className="flex-grow p-3 bg-black rounded-b-lg flex flex-col">
                  <div className="sm:text-sm md:text-base lg:text-2xl font-bold">
                    {item.name}
                  </div>
                  <div className="text-sm lg:text-lg mb-2 text-green-600">
                    {item.title}
                  </div>
                  <div className={"text-gray-300"}>{item.descJp}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </section>
  );
}
