import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import mainBg from "../assets/images/main_photo.svg";
import hexagonBg from "../assets/images/luc_giac.svg";
import M01 from "../assets/images/m01.svg";

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

const LIST_COLUMN = [
  {
    key: 1,
    title: "RECOMMENDED COLUMN",
    content: "05.21.Morning",
  },
  {
    key: 2,
    title: "RECOMMENDED DIET",
    content: "05.21.Lunch",
  },
  {
    key: 3,
    title: "RECOMMENDED BEAUTY",
    content: "05.21.Dinner",
  },
  {
    key: 4,
    title: "RECOMMENDED HEALTH",
    content: "05.21.Snack",
  },
  {
    key: 5,
    title: "RECOMMENDED COLUMN",
    content: "05.21.Snack",
  },
  {
    key: 6,
    title: "RECOMMENDED DIET",
    content: "05.21.Snack",
  },
  {
    key: 7,
    title: "RECOMMENDED BEAUTY",
    content: "05.21.Snack",
  },
  {
    key: 8,
    title: "RECOMMENDED HEALTH",
    content: "05.21.Snack",
  },
];

const MyApp = () => {
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
      <div className="w-full">
        <div className="main-photo grid grid-cols-10 bg-neutral-900">
          <div className="col-span-4 h-full w-full relative flex items-center justify-center">
            <div className="absolute" style={{ left: 0 }}>
              <img
                className=""
                style={{ height: "312px" }}
                src={mainBg}
                alt="main"
              />
            </div>
            <div className="absolute">
              <div className="relative flex items-center justify-center">
                <svg
                  width="181"
                  height="181"
                  viewBox="0 0 181 181"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_0_94)">
                    <path
                      d="M90.5 181C40.598 181 0 140.402 0 90.5H3C3 138.748 42.252 178 90.5 178C138.748 178 178 138.748 178 90.5C178 42.252 138.748 3 90.5 3V0C140.402 0 181 40.598 181 90.5C181 140.402 140.402 181 90.5 181Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_0_94"
                      x="-6"
                      y="-6"
                      width="193"
                      height="193"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="3" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.988235 0 0 0 0 0.454902 0 0 0 0 0 0 0 0 1 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_0_94"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_0_94"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                <div className="text-white absolute">
                  <span className="text-[18px] font-normal leading-[22px]">
                    05/21
                  </span>
                  <span className="px-[4px] text-[25px] font-normal leading-[30px]">
                    75%
                  </span>
                </div>
              </div>
            </div>
          </div>
          {chartData && (
            <div className="col-span-6 w-full pl-[30px] pr-[100px]">
              <div className="my-[8px]">
                <Line height={296} data={chartData} options={options} />
              </div>
            </div>
          )}
        </div>
        <div className="my-[25px] h-[116px] max-w-[960px] flex items-center justify-center m-auto">
          <div className="w-full grid grid-cols-4">
            <div className="item flex items-center justify-center">
              <div className="relative w-[134px] h-[116px] flex items-center justify-center">
                <div className="absolute">
                  <img
                    className="h-[116px]"
                    width={134}
                    src={hexagonBg}
                    alt="hexagon"
                  />
                </div>
                <a className="absolute" href="/list">
                  <svg
                    width="53"
                    height="45"
                    viewBox="0 0 53 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.0234 40.2289C7.93441 41.316 7.93624 43.0846 9.02877 44.1788C10.123 45.2714 11.8917 45.2731 12.9805 44.1844L21.6829 35.4822L17.7255 31.525L9.0234 40.2289Z"
                      fill="white"
                    />
                    <path
                      d="M52.2807 7.37263L44.4311 15.2493L43.1201 13.9338L50.7092 5.79414L49.9738 5.05622L41.807 12.6162L40.494 11.3004L48.1175 3.19507L47.3244 2.39758L39.1828 9.98285L37.8698 8.6651L45.7191 0.78833L44.9351 0C44.9351 0 37.5451 5.81378 33.8966 8.81451C32.6176 9.86383 32.103 11.6404 32.2822 13.2911C32.528 15.523 32.7987 16.3888 31.895 17.2959L24.239 24.9764C14.4183 15.1179 3.66828 4.32897 2.56159 3.23455C1.91059 2.59014 0.977608 2.59014 0.393128 3.17699C-1.64435 5.22173 4.50775 17.4365 12.612 27.6746C14.3017 25.97 15.839 24.4364 15.839 24.4364L35.5219 44.1858C36.7396 45.4082 38.5119 45.1255 39.4466 44.1858H39.4483C40.5317 43.0988 40.5317 41.333 39.4483 40.2457C37.3655 38.156 33.0964 33.8683 28.1764 28.9273L35.8245 21.2522C36.7432 20.3307 37.5915 20.6134 39.8161 20.8742C41.4858 21.0705 43.3137 20.5666 44.3668 19.2544C47.3334 15.5481 53.0001 8.09276 53.0001 8.09276L52.2807 7.37263Z"
                      fill="white"
                    />
                  </svg>
                  <div className="text-white">Morning</div>
                </a>
              </div>
            </div>

            <div className="item flex items-center justify-center">
              <div className="relative w-[134px] h-[116px] flex items-center justify-center">
                <div className="absolute">
                  <img
                    className="h-[116px]"
                    width={134}
                    src={hexagonBg}
                    alt="hexagon"
                  />
                </div>
                <a className="absolute" href="/list">
                  <svg
                    width="53"
                    height="45"
                    viewBox="0 0 53 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.0234 40.2289C7.93441 41.316 7.93624 43.0846 9.02877 44.1788C10.123 45.2714 11.8917 45.2731 12.9805 44.1844L21.6829 35.4822L17.7255 31.525L9.0234 40.2289Z"
                      fill="white"
                    />
                    <path
                      d="M52.2807 7.37263L44.4311 15.2493L43.1201 13.9338L50.7092 5.79414L49.9738 5.05622L41.807 12.6162L40.494 11.3004L48.1175 3.19507L47.3244 2.39758L39.1828 9.98285L37.8698 8.6651L45.7191 0.78833L44.9351 0C44.9351 0 37.5451 5.81378 33.8966 8.81451C32.6176 9.86383 32.103 11.6404 32.2822 13.2911C32.528 15.523 32.7987 16.3888 31.895 17.2959L24.239 24.9764C14.4183 15.1179 3.66828 4.32897 2.56159 3.23455C1.91059 2.59014 0.977608 2.59014 0.393128 3.17699C-1.64435 5.22173 4.50775 17.4365 12.612 27.6746C14.3017 25.97 15.839 24.4364 15.839 24.4364L35.5219 44.1858C36.7396 45.4082 38.5119 45.1255 39.4466 44.1858H39.4483C40.5317 43.0988 40.5317 41.333 39.4483 40.2457C37.3655 38.156 33.0964 33.8683 28.1764 28.9273L35.8245 21.2522C36.7432 20.3307 37.5915 20.6134 39.8161 20.8742C41.4858 21.0705 43.3137 20.5666 44.3668 19.2544C47.3334 15.5481 53.0001 8.09276 53.0001 8.09276L52.2807 7.37263Z"
                      fill="white"
                    />
                  </svg>
                  <div className="text-white">Lunch</div>
                </a>
              </div>
            </div>

            <div className="item flex items-center justify-center">
              <div className="relative w-[134px] h-[116px] flex items-center justify-center">
                <div className="absolute">
                  <img
                    className="h-[116px]"
                    width={134}
                    src={hexagonBg}
                    alt="hexagon"
                  />
                </div>
                <a className="absolute" href="/list">
                  <svg
                    width="53"
                    height="45"
                    viewBox="0 0 53 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.0234 40.2289C7.93441 41.316 7.93624 43.0846 9.02877 44.1788C10.123 45.2714 11.8917 45.2731 12.9805 44.1844L21.6829 35.4822L17.7255 31.525L9.0234 40.2289Z"
                      fill="white"
                    />
                    <path
                      d="M52.2807 7.37263L44.4311 15.2493L43.1201 13.9338L50.7092 5.79414L49.9738 5.05622L41.807 12.6162L40.494 11.3004L48.1175 3.19507L47.3244 2.39758L39.1828 9.98285L37.8698 8.6651L45.7191 0.78833L44.9351 0C44.9351 0 37.5451 5.81378 33.8966 8.81451C32.6176 9.86383 32.103 11.6404 32.2822 13.2911C32.528 15.523 32.7987 16.3888 31.895 17.2959L24.239 24.9764C14.4183 15.1179 3.66828 4.32897 2.56159 3.23455C1.91059 2.59014 0.977608 2.59014 0.393128 3.17699C-1.64435 5.22173 4.50775 17.4365 12.612 27.6746C14.3017 25.97 15.839 24.4364 15.839 24.4364L35.5219 44.1858C36.7396 45.4082 38.5119 45.1255 39.4466 44.1858H39.4483C40.5317 43.0988 40.5317 41.333 39.4483 40.2457C37.3655 38.156 33.0964 33.8683 28.1764 28.9273L35.8245 21.2522C36.7432 20.3307 37.5915 20.6134 39.8161 20.8742C41.4858 21.0705 43.3137 20.5666 44.3668 19.2544C47.3334 15.5481 53.0001 8.09276 53.0001 8.09276L52.2807 7.37263Z"
                      fill="white"
                    />
                  </svg>
                  <div className="text-white">Dinner</div>
                </a>
              </div>
            </div>

            <div className="item flex items-center justify-center">
              <div className="relative w-[134px] h-[116px] flex items-center justify-center">
                <div className="absolute">
                  <img
                    className="h-[116px]"
                    width={134}
                    src={hexagonBg}
                    alt="hexagon"
                  />
                </div>
                <a className="absolute" href="/list">
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect opacity="0.01" width="56" height="56" fill="white" />
                    <g clipPath="url(#clip0_0_102)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M45 12.0464C42.7853 12.0464 40.9036 10.3071 40.9036 8H15.1486C15.1486 10.304 13.2163 12.0464 11 12.0464V14.6671H45V12.0464ZM12.7004 17.9999L17.9067 48H38.2008L43.3013 17.9999H12.7004ZM39.2861 21.3264L38.1519 28H17.954L16.8198 21.3264H39.2861ZM20.7872 44.6672L19.6532 38.0001H36.4528L35.3203 44.6672H20.7872Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_102">
                        <rect
                          width="34"
                          height="40"
                          fill="white"
                          transform="translate(11 8)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="text-white">Snack</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mb-[28px] max-w-[960px] m-auto">
          <div className="w-full grid grid-cols-4 gap-[8px]">
            {LIST_COLUMN.map((item) => (
              <div key={item.key} className="w-full h-full relative">
                <img className="w-full h-full" src={M01} alt="item" />
                <div className="absolute" style={{ bottom: 0 }}>
                  <p
                    className="bg-amber-400 text-white px-[8px]
                                        text-[15px] font-normal leading-[30px]"
                  >
                    {item.content}
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

export default MyApp;
