import React, { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import Logo from "../../../assets/images/logo.svg";
import iconMemo from "../../../assets/images/icon_memo.svg";
import iconChallenge from "../../../assets/images/icon_challenge.svg";
import iconInfo from "../../../assets/images/icon_info.svg";
import iconMenu from "../../../assets/images/icon_menu.svg";
import iconClose from "../../../assets/images/icon_close.svg";

const HeaderWrapper = () => {
  const [count, setCount] = useState("1");
  const [showClose, setShowClose] = useState(false);

  return (
    <div className="content-center h-64 bg-neutral-700 fixed w-full z-20 shadow-lg">
      <div className="w-full mx-auto h-full flex justify-between max-w-[960px]">
        <h1 className="text-3xl cursor-pointer">
          <img src={Logo} alt="health-logo" className="" />
        </h1>
        <div className="grid grid-cols-4 gap-4">
          <div className="flex content-center w-full items-center">
            <img
              className="w-[32px] h-[32px`] mr-[8px]"
              src={iconMemo}
              alt={"meno"}
            />
            <span className="mr-[24px] text-white flex content-center text-[16px] font-light leading-[23px]">
              自分の記録
            </span>
          </div>
          <div className="flex content-center w-full items-center">
            <img
              className="w-[32px] h-[32px`] mr-[8px]"
              src={iconChallenge}
              alt={"meno"}
            />
            <span className="text-white flex content-center text-[16px] font-light leading-[23px]">
              チャレンジ
            </span>
          </div>
          <div className="flex content-center w-full items-center">
            <div title={count} className="count">
              <img
                className="w-[32px] h-[32px`] mr-[8px] "
                src={iconInfo}
                alt={"meno"}
              />
            </div>
            <span className="text-white flex content-center text-[16px] font-light leading-[23px]">
              お知らせ
            </span>
          </div>
          <div className="flex content-center w-full items-center justify-end cursor-pointer">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button>
                  {!showClose ? (
                    <img
                      onClick={() => setShowClose(true)}
                      className="w-[32px] h-[32px`]"
                      src={iconMenu}
                      alt={"meno"}
                    />
                  ) : (
                    <img
                      onClick={() => setShowClose(false)}
                      className="w-[32px] h-[32px`]"
                      src={iconClose}
                      alt={"meno"}
                    />
                  )}
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  style={{ right: 0 }}
                  className="absolute w-[280px] z-10 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div className="py-1" style={{ backgroundColor: "#777777" }}>
                    <Menu.Item>
                      <a
                        href="#"
                        style={{ borderColor: "rgb(46, 46, 46, 0.25)" }}
                        className="block border-b text-white text-[18px] font-light leading-[26px] px-[32px] py-[23px]"
                      >
                        自分の記録
                      </a>
                    </Menu.Item>
                    <Menu.Item>
                      <a
                        href="#"
                        style={{
                          borderBottomColor: "rgb(46, 46, 46, 0.25)",
                          borderTopColor: "rgb(255,255,255, 0.15)",
                        }}
                        className="block border-t border-b text-white text-[18px] font-light leading-[26px] px-[32px] py-[23px]"
                      >
                        体重グラフ
                      </a>
                    </Menu.Item>
                    <Menu.Item>
                      <a
                        href="#"
                        style={{
                          borderBottomColor: "rgb(46, 46, 46, 0.25)",
                          borderTopColor: "rgb(255,255,255, 0.15)",
                        }}
                        className="block border-t border-b text-white text-[18px] font-light leading-[26px] px-[32px] py-[23px]"
                      >
                        目標
                      </a>
                    </Menu.Item>
                    <Menu.Item>
                      <a
                        href="#"
                        style={{
                          borderBottomColor: "rgb(46, 46, 46, 0.25)",
                          borderTopColor: "rgb(255,255,255, 0.15)",
                        }}
                        className="block border-t border-b text-white text-[18px] font-light leading-[26px] px-[32px] py-[23px]"
                      >
                        選択中のコース
                      </a>
                    </Menu.Item>
                    <Menu.Item>
                      <a
                        href="#"
                        style={{
                          borderBottomColor: "rgb(46, 46, 46, 0.25)",
                          borderTopColor: "rgb(255,255,255, 0.15)",
                        }}
                        className="block border-t border-b text-white text-[18px] font-light leading-[26px] px-[32px] py-[23px]"
                      >
                        コラム一覧
                      </a>
                    </Menu.Item>
                    <Menu.Item>
                      <a
                        href="#"
                        style={{
                          borderBottomColor: "rgb(46, 46, 46, 0.25)",
                          borderTopColor: "rgb(255,255,255, 0.15)",
                        }}
                        className="block border-t border-b text-white text-[18px] font-light leading-[26px] px-[32px] py-[23px]"
                      >
                        設定
                      </a>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderWrapper;
