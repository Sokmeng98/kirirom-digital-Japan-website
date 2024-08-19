import styles from "../../../pages/about-us.module.css";

const companyInfo = [
  {
    title: "企業名",
    desc: ["キリロムデジタル株式会社（Kirirom Digital inc.）"],
  },
  {
    title: "住所",
    desc: ["〒102-0071東京都千代田区富士見１丁目３−１１ (Google Map)"],
  },
  {
    title: "設立年月日",
    desc: ["2021年12月24日"],
  },
  {
    title: "資本金",
    desc: ["資本の部 110,010千円 （資本金 10千円、新株予約権 110,000千円）"],
  },
  {
    title: "役員",
    desc: ["代表取締役", "取締役会長", "取締役副社長", "取締役US事業統括"],
    names: ["猪塚 武", "百瀬 公朗", "石原 良太", "Jun Page"],
  },
  {
    title: "沿革",
    desc: [
      "・2011年12月 A2A town Co., Ltd設立。 カンボジア国立公園内で学研都市開発を開始",
      "・2017年～20年 A2A town Co., Ltdがデロイトアジア太平洋地域テクノロジーFast500を4年連続受賞",
      "・2021年12月 A2A town Co., LtdのA2Aデジタル事業部（IT事業部）を分離し、キリロムデジタル株式会社を設立",
      "・2022年7月 開発子会社Kirirom Digital (Cambodia) Co., Ltdを設立",
      "・2022年8月 JKISS方式で1億円の資金調達",
      "・2023年5月 香川県さぬき市に開発拠点を開設",
      "・2024年4月 US法人KIRIROM Inc.を設立",
    ],
  },
];

export default function Company() {
  return (
    <div className="sm:mx-4 md:mx-16 px-2 bg-white text-kd-white">
      <div className="w-fit">
        <h1 className="text-lg md:text-2xl lg:text-4xl text-[#091C3E] font-bold ">
          Company
        </h1>
        <div className="h-1 w-full rounded-full bg-red-600 mt-1 mb-2"></div>
      </div>

      {/* Company Details */}
      <section className="py-4">
        {companyInfo.map((item, index) => (
          <div key={index}>
            <div className={"row " + styles.companyInfoItem}>
              <div className={"col-3 " + styles.companyInfoTitle}>
                <div className="text-sm md:text-base lg:text-lg text-[#091C3E] font-bold">
                  {item.title}
                </div>
              </div>
              <div className={"col-9 " + styles.companyInfoDesc}>
                <div className="text-sm md:text-base lg:text-lg text-[#091C3E] font-normal">
                  <div className={`${item.names ? ' flex ' : ''}`}>
                    <div className={`${item.names ? ' flex-col mr-4 ' : ''}`}>
                      {item.desc.map((line, descIndex) => (
                        <div key={descIndex}>{line}</div>
                      ))}
                    </div>
                    <div className=" flex-col ">
                      {item.names && item.names.map((name, nameIndex) => (
                        <div key={nameIndex}>{name}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {index !== companyInfo.length - 1 && (
              <div className=" border-b-2 border-black my-3"></div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
