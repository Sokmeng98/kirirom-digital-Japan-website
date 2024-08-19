
const cardData = [
  {
    title: "世界で存在感の薄い日本人ITエンジニア",
    description: "ITエンジニア数は約120万人と世界でも有数のエンジニア大国である日本。しかしそのほとんどは日本国内での活動にとどまっています",
  },
  {
    title: "世界で通用する日本のスタートアップの少なさ",
    description: "米国ユニコーン企業の創業者の半数以上は移民。しかし移民系創業者出身国Top20に日本はランクインしていません（圧倒的1位はインド、2位はイスラエル）",
  },
  {
    title: "日本国内における実務で英語を使える環境の少なさ",
    description: "日本市場向けのシステム開発プロジェクトがほぼ全てを占める日本においては、多国籍チームかつ英語で実務を積める職場がほとんど存在しません",
  },
  {
    title: "日本人エンジニアが世界に出るためのキャリアパス不足",
    description: "日本人エンジニアがビッグテックの本国で就労しているようなケースはありますが極めて限定的で、モデルケースやステップが存在していません",
  },
];
export default function Strategic() {
  return (
    <div className="sm:mx-4 md:mx-16 bg-white px-2">
      <div className="mt-2 mb-10 md:mb-20 md:mt-6 ">
        <div className="w-fit">
          <h1 className="text-lg md:text-2xl lg:text-4xl text-[#091C3E] font-bold">
            キリロムデジタルが解決したい課題
          </h1>
          <div className="h-1 w-full rounded-full bg-red-600 mt-1 mb-2"></div>
        </div>
        {/* Card */}
        <div className="items-stretch gap-3 flex flex-col md:flex-row justify-center flex-wrap mt-8 md:mt-10">
          {cardData.map((card, index) => (
            <div key={index} className="w-full md:w-[20rem] lg:w-0 flex-grow relative bg-white shadow-lg rounded-2xl p-4 transition duration-300 md:hover:scale-105">
              <div className="flex justify-start items-start gap-2 lg:h-[86px] xl:h-20 2xl:h-14">
                <h3 className="md:text-xl lg:text-xl text-black text-center font-bold">
                  {card.title}
                </h3>
              </div>
              <div className="text-sm md:text-base lg:text-lg pt-4 text-[#1b232f]">
                {card.description}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Vision */}
      <div className="mt-2 mb-10 md:mb-20">
        <div className="w-fit">
          <h1 className="text-lg md:text-2xl lg:text-4xl text-[#091C3E] font-bold">
          VISION
          </h1>
          <div className="h-1 w-full rounded-full bg-red-600 mt-1 mb-2"></div>
        </div>
        <div className=" mt-5 md:mt-10">
          <div className="flex justify-center items-center font-bold text-xl md:text-2xl lg:text-3xl">日本のエンジニアを世界に解放する</div>
          <div className="text-lg md:text-xl mt-5 md:mt-10 w-full mx-auto">
            <div className="flex flex-row justify-center">高い数学力、ユーザー視点の機能実装、世界一の職業倫理。日本人エンジニアは世界に誇る日本の宝です。</div>
            <div className="flex flex-row justify-center">しかし言語の壁をはじめとした問題により、その能力を世界に届けることはできていません。</div>
            <div className="flex flex-row justify-center">キリロムデジタルはエンジニアのグローバル化を通じて、日本の世界への貢献力を高めます。</div>
          </div>
        </div>
      </div>
    </div>
  );
}
