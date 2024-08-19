import React from "react";

const Section2 = () => {
  return (
    <div className="h-fit">
      <div className="pt-10">
        <div className="w-fit m-auto">
          <h2 className="text-xl md:text-2xl text-center text-[#091C3E] font-bold">
            キリロムデジタルの4つの特徴
          </h2>
          <div className="h-1 w-full rounded-full bg-red-600 mt-1 mb-2"></div>
        </div>

        <div className="relative md:mt-5 h-fit my-2">
          <div className="hidden md:flex h-0.5 w-full rounded-lg bg-black absolute z-10 top-1/2" />
          <div className="hidden md:flex h-full w-0.5 rounded-lg bg-black absolute z-10 right-1/2 left-1/2" />
          {/* row 1 */}
          <div className="mt-10 flex flex-col md:flex-row gap-2 md:mb-10">
            {/* col 1 */}
            <div className="relative md:min-h-32 md:w-1/2 mb-16 sm:mb-9 lg:mb-0 min-h-24">
              <div className="absolute z-10 ">
                <h3 className="font-bold text-xl pb-3">
                  日本以外の開発プロジェクトのチャンス
                </h3>
                <p>
                  子会社Kirirom
                  Inc.（米国）が受託した開発案件に携わることができます。国内案件も英語で進行しますので、実務で英語が使える環境です。
                </p>
              </div>
              <p className="font-extrabold text-8xl absolute  z-0 text-gray-300">
                1
              </p>
            </div>
            {/* col 2 */}
            <div className="relative min-h-28 md:w-1/2 mb-3  md:pl-3">
              <div className="absolute z-10 ">
                <h3 className="font-bold text-xl pb-3">フルリモートワーク可</h3>
                <p>
                  インフラが安定している場所であれば、働く場所は問いません。時差がある場合、勤務時間帯は合わせる必要がありますので要相談です。
                </p>
              </div>
              <p className="font-extrabold text-8xl absolute  z-0 text-gray-300 ">
                2
              </p>
            </div>
          </div>
          {/* col 2 */}

          <div className="pt-3 flex flex-col md:flex-row gap-2">
            {/* row 1 */}
            <div className="relative min-h-32 md:w-1/2 mb-3">
              <div className="absolute z-10 ">
                <h3 className="font-bold text-xl pb-3">雇用形態の柔軟性</h3>
                <p>
                  パートタイムからの参画も可能です。雇用契約もご都合に合わせて柔軟に対応します。フリーランスの方も歓迎です。
                </p>
              </div>
              <p className="font-extrabold text-8xl absolute  z-0 text-gray-300">
                3
              </p>
            </div>
            {/* row 2 */}
            <div className="relative min-h-28 md:w-1/2  md:pl-3 ">
              <div className="absolute z-10 ">
                <h3 className="font-bold text-xl pb-3">多国籍開発チーム</h3>
                <p>
                  アジア、ヨーロッパ、アフリカとダイバーシティに富んだチームです。グローバル・コミュニケーションを学ぶには最適です。
                </p>
              </div>
              <p className="font-extrabold text-8xl absolute  z-0 text-gray-300">
                4
              </p>
            </div>
          </div>
        </div>
        {/* end */}
      </div>
    </div>
  );
};

export default Section2;
