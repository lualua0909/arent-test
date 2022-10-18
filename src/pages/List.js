import React, { useState, useEffect } from "react";
import M01 from "../assets/images/m01.svg";

const RECOMMENDED_COLUMN = [
  {
    key: 1,
    title: "RECOMMENDED COLUMN",
    content: "オススメ",
  },
  {
    key: 2,
    title: "RECOMMENDED DIET",
    content: "ダイエット",
  },
  {
    key: 3,
    title: "RECOMMENDED BEAUTY",
    content: "美容",
  },
  {
    key: 4,
    title: "RECOMMENDED HEALTH",
    content: "健康",
  },
];

const List = () => {
  const [data, setData] = useState();

  useEffect(() => {
    // I assume i call api at this position
    setData([1, 2, 3, 4, 5, 6, 7, 8]);
  }, []);

  return (
    <>
      <div className="w-full">
        <div className="flex items-center justify-center my-[56px]">
          <div className="w-full max-w-[960px] grid grid-cols-4 gap-[32px]">
            {RECOMMENDED_COLUMN.map((item) => (
              <div key={item.key} className="w-full">
                <div className="bg-neutral-900 text-center min-h-[180px]">
                  <p className="text-amber-400 text-[22px] font-normal leading-[27px] px-[12px] py-[24px]">
                    {item.title}
                  </p>
                  <p className="w-[80px] border-[0.5px] border-white m-auto"></p>
                  <p className="text-white text-[22px] font-normal leading-[27px] px-[12px] py-[24px]">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center mb-[28px]">
          <div className="w-full max-w-[960px] grid grid-cols-4 gap-[8px]">
            {data?.map((item) => (
              <a key={item} className="w-full h-full" href="/detail">
                <div className="">
                  <div className="relative">
                    <img className="w-full" src={M01} alt="item" />
                    <div className="absolute" style={{ bottom: 0 }}>
                      <p className="bg-amber-400 text-white px-[8px] text-[15px] font-normal leading-[30px]">
                        2021.05.17 23:25
                      </p>
                    </div>
                  </div>
                  <div className="pt-[5px]">
                    <p className="text-[15px] font-light leading-[22px] text-neutral-700">
                      魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…
                    </p>
                  </div>
                  <div className="pt-[10px] pb-[18px]">
                    <p className="text-[15px] font-light leading-[22px] text-amber-500">
                      #魚料理 #和食 #DHA
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="text-center mb-[64px]">
          <button
            className="w-[256px] h-[56px] bg-gradient-to-t
                        from-amber-400 to-amber-500 hover:from-amber-300
                        hover:to-amber-400 rounded-md text-white"
          >
            記録をもっと見る
          </button>
        </div>
      </div>
    </>
  );
};

export default List;
