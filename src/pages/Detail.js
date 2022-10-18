import React, { useState, useEffect } from "react";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      display: false,
    },
    x: {
      ticks: {
        color: "#ffffff",
        fontsize: 12,
      },
      grid: {
        color: "#777777",
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = [
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
];

const Detail = () => {
  const [chartData, setChartData] = useState();

  useEffect(() => {
    // I assume i call api at this position
    const line1 = [1, 3, 0, 0, 6, 2, 10, 3, 4, 5, 6, 4];
    const line2 = [1, 4, 3, 3, 4, 5, 6, 7, 3, 5, 4, 8];

    setChartData({
      labels,
      datasets: [
        {
          label: "Dataset 1",
          data: line1,
          borderColor: "rgba(143, 233, 208, 1)",
          backgroundColor: "rgba(143, 233, 208, 1)",
        },
        {
          label: "Dataset 2",
          data: line2,
          borderColor: "rgba(255, 204, 33, 1)",
          backgroundColor: "rgba(255, 204, 33, 1)",
        },
      ],
    });
  }, []);
  return (
    <>
      <div className="w-full max-w-[960px] mx-auto">
        <div className="my-[56px]">
          <div className="w-full grid grid-cols-3 gap-[48px]">
            <div className="w-full h-[288px]">
              <div className="bg-image w-full h-full bg-[#2E2E2E]">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-[25px] font-normal leading-[30px] text-[#FFCC21]">
                      BODY RECORD
                    </p>
                    <p className="bg-amber-500 text-white text-[14px] font-light leading-[20px] px-[12px] my-[11px]">
                      自分のカラダの記録
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[288px] mix-blend-luminosity">
              <div className="bg-image w-full h-full bg-[#2E2E2E] mix-blend-luminosity">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-[25px] font-normal leading-[30px] text-[#FFCC21]">
                      MY EXERCISE
                    </p>
                    <p className="bg-amber-500 text-white text-[14px] font-light leading-[20px] px-[12px] my-[11px]">
                      自分の運動の記録
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[288px] mix-blend-luminosity">
              <div className="bg-image w-full h-full bg-[#2E2E2E] mix-blend-luminosity">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-[25px] font-normal leading-[30px] text-[#FFCC21]">
                      MY DIARY
                    </p>
                    <p className="bg-amber-500 text-white text-[14px] font-light leading-[20px] px-[12px] my-[11px]">
                      自分の日記
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-neutral-700 text-white py-[16px] px-[24px]">
          <p className="text-[15px] font-normal leading-[18px] py-[11px]">
            MY EXERCISE
            <span className="text-[22px] font-normal leading-[27px] px-[8px]">
              2021.05.21
            </span>
          </p>
          {chartData && (
            <div className="w-full grid grid-cols-2 gap-x-[40px]">
              <Line height={312} data={chartData} options={options} />
            </div>
          )}
          <div className="flex">
            <div className="py-[8px] pr-[16px]">
              <button className="w-[56px] h-[24px] bg-white rounded-full text-white text-amber-400">
                日
              </button>
            </div>
            <div className="py-[8px] pr-[16px]">
              <button className="w-[56px] h-[24px] bg-white rounded-full text-white text-amber-400">
                週
              </button>
            </div>
            <div className="py-[8px] pr-[16px]">
              <button className="w-[56px] h-[24px] bg-white rounded-full text-white text-amber-400">
                月
              </button>
            </div>
            <div className="py-[8px] pr-[16px]">
              <button className="w-[56px] h-[24px] bg-amber-400 rounded-full text-white text-white">
                年
              </button>
            </div>
          </div>
        </div>
        <div className="my-[56px] py-[16px] px-[24px] bg-neutral-700 text-white">
          <p className="">
            MY EXERCISE <span>2021.05.21</span>
          </p>
          <div className="w-full grid grid-cols-2 gap-x-[40px]">
            <div>
              {[1, 2, 3, 4].map((item) => (
                <ul
                  key={item}
                  className="list-disc border-b border-neutral-400"
                >
                  <li className="px-[16px] pt-[8px]">
                    <div className="flex item-center justify-between">
                      <p className="text-[15px] font-light leading-[22px]">
                        家事全般（立位・軽い）
                      </p>
                      <p className="text-[15px] font-normal leading-[18px] text-amber-400">
                        10 min
                      </p>
                    </div>
                    <div>
                      <p className="text-[15px] font-normal leading-[18px] text-amber-400">
                        26kcal
                      </p>
                    </div>
                  </li>
                </ul>
              ))}
            </div>
            <div>
              {[1, 2, 3, 4].map((item) => (
                <ul
                  key={item}
                  className="list-disc border-b border-neutral-400"
                >
                  <li className="px-[16px] pt-[8px]">
                    <div className="flex item-center justify-between">
                      <p className="text-[15px] font-light leading-[22px]">
                        家事全般（立位・軽い）
                      </p>
                      <p className="text-[15px] font-normal leading-[18px] text-amber-400">
                        10 min
                      </p>
                    </div>
                    <div>
                      <p className="text-[15px] font-normal leading-[18px] text-amber-400">
                        26kcal
                      </p>
                    </div>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
        <div className="my-[56px]">
          <p className="text-[22px] font-normal leading-[27px] pb-[8px]">
            MY DIARY
          </p>
          <div className="w-full grid grid-cols-4 gap-[12px]">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="w-full border-2 p-[16px]">
                <div className="text-[18px] font-normal leading-[22px]">
                  <p>2021.05.21</p>
                  <p>23:25</p>
                </div>
                <div className="text-[12px] font-light leading-[17px] py-[8px]">
                  <p>私の日記の記録が一部表示されます。</p>
                  <p>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
                  </p>
                </div>
              </div>
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

export default Detail;
