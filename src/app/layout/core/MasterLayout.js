import React from "react";
import HeaderWrapper from "../components/HeaderWrapper";
import { Outlet } from "react-router-dom";
import FooterWrapper from "../components/FooterWrapper";

const MasterLayout = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="container-center box-border">
      <HeaderWrapper />
      <div
        onClick={() => scrollToTop()}
        className="fixed bottom-0 cursor-pointer"
        style={{ right: "180px", bottom: "100px", zIndex: 9999 }}
      >
        <div className="w-[48px] h-[48px] border border-slate-500 rounded-full flex items-center justify-center">
          <svg
            width="16"
            height="10"
            viewBox="0 0 16 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5852 9.04198L8.00017 2.65788L1.41513 9.04198L0.53894 8.19253L8.00018 0.958984L15.4614 8.19253L14.5852 9.04198Z"
              fill="#777777"
            />
          </svg>
        </div>
      </div>
      <div className="pt-[64px]">
        <Outlet />
      </div>
      <FooterWrapper />
    </div>
  );
};

export { MasterLayout };
