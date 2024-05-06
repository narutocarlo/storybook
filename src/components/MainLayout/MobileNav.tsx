
// import { useAuth } from '@/_contexts/auth';
import {
  barsMenuData,
  optionsData,
  resourcesData,
  screenerData,
} from "../../_utils/HeaderData";
import {
  faChevronDown,
  faChevronRight,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import yellow_crownImage from "../../assets/images/yellow-crown.svg";
import editIcon from "../../assets/images/edit.svg";

const MobileNav = ({
  isLoggedIn = true,
  toggleSideMenu,
  openSideMenu,
}: any) => {
  const [menuVisible, setMenuVisible] = useState(null);
  // const { isLoggedIn } = useAuth();
  const handleMenuToggle = (e: any, menuIndex: any) => {
    if (e && typeof e.stopPropagation === "function") {
      e.stopPropagation();
    }
    setMenuVisible((prevMenu) => (prevMenu === menuIndex ? null : menuIndex));
  };

  return (
    <>
      {(openSideMenu && (
        <div
          className="bg-[rgba(0,0,0,0.6)] fixed h-full w-full z-[100] end-0 top-[59px]"
          onClick={toggleSideMenu}
        ></div>
      )) ||
        ""}
      <aside
        className={`flex-shrink-0 flex flex-col fixed w-full max-w-[360px] top-[59px] h-full transition-all duration-300 z-[101]
       overflow-y-auto scroll-hidden pb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] ${
         !openSideMenu ? "left-[-100%]" : "left-0"
       } z-50`}
      >
        <nav className="flex-1 flex flex-col bg-white dark:bg-slate-800 py-5 px-4">
          {isLoggedIn && (
            <>
              <div className="shadow-[0px_0px_7px_0px_#0000001A] p-4 rounded-md flex items-center justify-between">
                <div className="flex items-center">
                  <div className="relative mr-3">
                    <Image
                      src={yellow_crownImage}
                      alt="crown"
                      width={23}
                      height={23}
                      className="absolute left-0 right-0 m-auto top-[-12px]"
                    />
                    <span
                      className="w-[40px] h-[40px] flex items-center justify-center rounded-full font-semibold 
            cursor-pointer bg-[#ECF5FE] text-primary-text text-[16px] uppercase select-none"
                      onClick={(e) => handleMenuToggle(e, 4)}
                    >
                      AA
                    </span>
                  </div>
                  <div>
                    <h4 className="text-primary-text text-[14px] mb-1 font-semibold">
                      User Name
                    </h4>
                    <h4 className="text-[#999999] text-[14px] m-0">
                      9876543210
                    </h4>
                  </div>
                </div>
                <Link href={"/"}>
                  <Image
                    src={editIcon}
                    alt="icon"
                    width={18}
                    height={18}
                    className=""
                  />
                </Link>
              </div>
              <div className="w-[250px] h-[1px] mx-auto bg-[#DDDDDD] my-5"></div>
              <div className="grid grid-cols-4 gap-2">
                <div className="mb-1">
                  <Link href={"/"} className="text-center">
                    <div className="flex items-center justify-center w-[40px] h-[40px] rounded-md bg-primary-text text-white mx-auto">
                      <span className="material-symbols-outlined font-medium cursor-pointer">
                        dashboard
                      </span>
                    </div>
                    <span className="text-[11px] text-black mx-auto block mt-1">
                      My Dashboard
                    </span>
                  </Link>
                </div>
                <div className="mb-1">
                  <Link href={"/"} className="text-center">
                    <div className="flex items-center justify-center w-[40px] h-[40px] rounded-md bg-primary-text text-white mx-auto">
                      <span className="material-symbols-outlined font-medium cursor-pointer">
                        bookmark
                      </span>
                    </div>
                    <span className="text-[11px] text-black mx-auto block mt-1">
                      My Watchlist
                    </span>
                  </Link>
                </div>
                <div className="mb-1">
                  <Link href={"/"} className="text-center">
                    <div className="flex items-center justify-center w-[40px] h-[40px] rounded-md bg-primary-text text-white mx-auto">
                      <span className="material-symbols-outlined font-medium cursor-pointer">
                        alarm
                      </span>
                    </div>
                    <span className="text-[11px] text-black mx-auto block mt-1">
                      My Alerts
                    </span>
                  </Link>
                </div>
                <div className="mb-1">
                  <Link href={"/"} className="text-center">
                    <div className="flex items-center justify-center w-[40px] h-[40px] rounded-md bg-primary-text text-white mx-auto">
                      <span className="material-symbols-outlined font-medium cursor-pointer">
                        alarm
                      </span>
                    </div>
                    <span className="text-[11px] text-black mx-auto block mt-1">
                      My Portfolio
                    </span>
                  </Link>
                </div>
                <div className="mb-1">
                  <Link href={"/"} className="text-center">
                    <div className="flex items-center justify-center w-[40px] h-[40px] rounded-md bg-primary-text text-white mx-auto">
                      <span className="material-symbols-outlined font-medium cursor-pointer">
                        share
                      </span>
                    </div>
                    <span className="text-[11px] text-black mx-auto block mt-1">
                      Share a Trial
                    </span>
                  </Link>
                </div>
                <div className="mb-1">
                  <Link href={"/"} className="text-center">
                    <div className="flex items-center justify-center w-[40px] h-[40px] rounded-md bg-primary-text text-white mx-auto">
                      <span className="material-symbols-outlined font-medium cursor-pointer">
                        lock_reset
                      </span>
                    </div>
                    <span className="text-[11px] text-black mx-auto block mt-1">
                      Change Password
                    </span>
                  </Link>
                </div>
                <div className="mb-1">
                  <Link href={"/"} className="text-center">
                    <div className="flex items-center justify-center w-[40px] h-[40px] rounded-md bg-primary-text text-white mx-auto">
                      <span className="material-symbols-outlined font-medium cursor-pointer">
                        app_promo
                      </span>
                    </div>
                    <span className="text-[11px] text-black mx-auto block mt-1">
                      Download App
                    </span>
                  </Link>
                </div>
                <div className="mb-1">
                  <Link href={"/"} className="text-center">
                    <div className="flex items-center justify-center w-[40px] h-[40px] rounded-md bg-primary-text text-white mx-auto">
                      <span className="material-symbols-outlined font-medium cursor-pointer">
                        shopping_cart
                      </span>
                    </div>
                    <span className="text-[11px] text-black mx-auto block mt-1">
                      Cart
                    </span>
                  </Link>
                </div>
              </div>
              <div className="w-[250px] h-[1px] mx-auto bg-[#DDDDDD] my-4"></div>
            </>
          )}
          <ul>
            <li
              className={
                "w-full font-medium cursor-pointer text-[16px] mb-4 select-none text-black"
              }
            >
              <div
                className="flex justify-between"
                onClick={(e) => handleMenuToggle(e, 0)}
              >
                <span>Market Pulse</span>
                <span>
                  <FontAwesomeIcon
                    icon={(menuVisible == 0 && faChevronUp) || faChevronDown}
                    width={10}
                    className={`text-[12px] ml-auto ${
                      (menuVisible == 0 && "text-primary-text") || ""
                    }`}
                  />
                </span>
              </div>
              {barsMenuData && menuVisible == 0 && (
                <div
                  className={
                    "grid grid-cols-2 gap-2 w-full transition-all duration-300 animate-growDown mt-2"
                  }
                >
                  <div className="flex flex-col relative">
                    {barsMenuData.slice(0, 7).map((item, index) => (
                      <Link
                        key={index}
                        href={item?.pageurl}
                        onClick={() => setMenuVisible(null)}
                        className="font-medium text-black mb-3 text-[12px] flex items-center"
                      >
                        <span
                          className={`w-[28px] h-[28px] flex items-center justify-center rounded-md mr-3
                    ${item.label == "Nifty Live Analytics" && "bg-[#F1FFF1]"}
                    ${item.label == "Bank Nifty Analytics" && "bg-[#FFEAEA]"}
                    ${item.label == "Fin Nifty Analytics" && "bg-[#ECF5FE]"}
                    ${item.label == "NSE Option Chain" && "bg-[#F3E8FF]"}
                    ${item.label == "BSE Option Chain" && "bg-[#FFEFFC]"}
                    ${item.label == "Stock Analysis" && "bg-[#FFF6E4]"}
                    ${item.label == "GPT Watchlist" && "bg-[#E7FAFF]"}
                    `}
                        >
                          <Image
                            src={ item.icon }
                            alt="icon"
                            width={14}
                            height={14}
                          />
                        </span>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col relative">
                    {barsMenuData.slice(7).map((item, index) => (
                      <Link
                        key={index}
                        href={item?.pageurl}
                        onClick={() => setMenuVisible(null)}
                        className="font-medium text-black mb-3 text-[12px] flex items-center"
                      >
                        <span
                          className={`w-[28px] h-[28px] flex items-center justify-center rounded-md mr-3
                    ${item.label == "GIFT NIFTY" && "bg-[#FFECE4]"}
                    ${item.label == "News" && "bg-[#FFEAEA]"}
                    ${item.label == "IPO" && "bg-[#ECF5FE]"}
                    ${item.label == "Option Strategy" && "bg-[#F3E8FF]"}
                    ${item.label == "Options Simulator" && "bg-[#FFEFFC]"}
                    ${item.label == "Prime" && "bg-[#FFF6E4]"}
                    ${item.label == "Blog" && "bg-[#E7FAFF]"}
                    `}
                        >
                          <Image
                            src={ item.icon }
                            alt="icon"
                            width={14}
                            height={14}
                          />
                        </span>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
            <li
              className={
                "w-full font-medium cursor-pointer text-[16px] mb-4 select-none text-black"
              }
            >
              <div
                className="flex justify-between"
                onClick={(e) => handleMenuToggle(e, 1)}
              >
                <span>Screener</span>
                <span>
                  <FontAwesomeIcon
                    icon={(menuVisible == 1 && faChevronUp) || faChevronDown}
                    width={10}
                    className={`text-[12px] ml-auto ${
                      (menuVisible == 1 && "text-primary-text") || ""
                    }`}
                  />
                </span>
              </div>
              {screenerData && menuVisible == 1 && (
                <div
                  className={`w-full transition-all duration-300 mt-2 animate-growDown`}
                >
                  <ul className="w-full">
                    {screenerData?.length > 0 &&
                      screenerData.map((item, key) => (
                        <>
                          <li key={key} className="mb-3">
                            <Link
                              href={item.pageurl}
                              onClick={() => setMenuVisible(null)}
                              className="font-medium text-black text-[12px] flex items-center"
                            >
                              <span
                                className={`w-[28px] h-[28px] flex items-center justify-center rounded-md mr-3
                                ${
                                  item.label == "Advanced Stock Screener" &&
                                  "bg-[#ECF5FE]"
                                }
                                ${
                                  item.label == "Live Market Screener" &&
                                  "bg-[#FFEAEA]"
                                }
                                ${
                                  item.label == "Options Screener" &&
                                  "bg-[#FFF6E4]"
                                }
                                `}
                              >
                                <Image
                                  src={ item.icon }
                                  alt="icon"
                                  width={15}
                                  height={15}
                                />
                              </span>
                              {item.label}
                            </Link>
                          </li>
                        </>
                      ))}
                  </ul>
                </div>
              )}
            </li>
            <li
              className={
                "w-full font-medium cursor-pointer text-[16px] mb-4 select-none text-black"
              }
            >
              <div
                className="flex justify-between"
                onClick={(e) => handleMenuToggle(e, 2)}
              >
                <span>Options</span>
                <span>
                  <FontAwesomeIcon
                    icon={(menuVisible == 2 && faChevronUp) || faChevronDown}
                    width={10}
                    className={`text-[12px] ml-auto ${
                      (menuVisible == 2 && "text-primary-text") || ""
                    }`}
                  />
                </span>
              </div>
              {optionsData && menuVisible == 2 && (
                <div
                  className={`w-full transition-all duration-300 mt-2 animate-growDown`}
                >
                  {optionsData.map((item, index) => (
                    <div key={index} className="pr-3 relative mb-4">
                      <h4 className="text-[13px] text-[#00498e] font-semibold mb-2 uppercase">
                        {item.label}
                      </h4>
                      <ul>
                        {item.links?.length > 0 &&
                          item.links.map((link, key) => (
                            <li key={key} className="mb-2">
                              <Link
                                href={link.pageurl}
                                className="text-[12px] text-[#999999] font-medium flex items-baseline"
                              >
                                <FontAwesomeIcon
                                  icon={faChevronRight}
                                  width={6}
                                  className="text-[9px] mr-1"
                                />{" "}
                                <span>{link.label}</span>
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>
            <li
              className={
                "w-full font-medium cursor-pointer text-[16px] mb-4 select-none text-black"
              }
            >
              <div
                className="flex justify-between"
                onClick={(e) => handleMenuToggle(e, 3)}
              >
                <span>Resources</span>
                <span>
                  <FontAwesomeIcon
                    icon={(menuVisible == 3 && faChevronUp) || faChevronDown}
                    width={10}
                    className={`text-[12px] ml-auto ${
                      (menuVisible == 3 && "text-primary-text") || ""
                    }`}
                  />
                </span>
              </div>
              {resourcesData && menuVisible == 3 && (
                <div
                  className={`w-full transition-all duration-300 mt-2 animate-growDown`}
                >
                  {resourcesData.map((item, index) => (
                    <div key={index} className="pr-3 relative mb-4">
                      <h4 className="text-[13px] text-[#00498e] font-semibold mb-2 uppercase">
                        {item.label}
                      </h4>
                      <ul>
                        {item.links?.length > 0 &&
                          item.links.map((link, key) => (
                            <li key={key} className="mb-2">
                              <Link
                                href={link.pageurl}
                                className="text-[12px] text-[#999999] font-medium flex items-baseline"
                              >
                                <FontAwesomeIcon
                                  icon={faChevronRight}
                                  width={6}
                                  className="text-[9px] mr-1"
                                />{" "}
                                <span>{link.label}</span>
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>
            {isLoggedIn && (
              <li
                className={
                  "w-full font-medium cursor-pointer text-[16px] mb-4 select-none text-black"
                }
              >
                <div className="flex items-center">
                  <span className="material-symbols-outlined font-medium cursor-pointer text-primary-text select-none me-2">
                    logout
                  </span>
                  <span> Logout</span>
                </div>
              </li>
            )}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default MobileNav;
