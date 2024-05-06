/* eslint-disable react-hooks/exhaustive-deps */
// import { useAuth } from '@/_contexts/auth';
import {
  barsMenuData,
  optionsData,
  profileData,
  resourcesData,
  screenerData,
} from "../../_utils/HeaderData";
import {
  faChevronDown,
  faChevronRight,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { setSearchStockStatus, showLoggedInPopup, showRegisterPopup } from '../../_redux/actions';
import Image from "next/image";
import serachImage from "../../assets/images/search.svg";
import logoImage from "../../assets/images/logo.svg";
import menu_blueImage from "../../assets/images/menu_blue.svg";
import menuImage from "../../assets/images/menu.svg";
import menu_qr_codeImage from "../../assets/images/menu-qr-code.svg";
import premiumImage from "../../assets/images/Premium.svg";
import shopping_cart from "../../assets/images/shopping_cart.svg";
import notifications_active from "../../assets/images/notifications_active.svg";
import yellow_crownImage from "../../assets/images/yellow-crown.svg";
import light_bgImage from "../../assets/images/light_bg.svg";
import light_modeImage from "../../assets/images/light_mode.svg";
import dark_bgImage from "../../assets/images/dark_bg.svg";
import dark_modeImage from "../../assets/images/dark_mode.svg";

// import { connect } from 'react-redux';
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MobileNav from './MobileNav';
import { useRouter } from "next/navigation";

// const mapStateToProps = (state) => ({
//   isSearchStockStatus: state.user.isSearchStockStatus,
// });

// const mapDispatchToProps = (dispatch) => ({
//   setShowLoginPopup: (data) => dispatch(showLoggedInPopup(data)),
//   setShowRegisterPopup: (data) => dispatch(showRegisterPopup(data)),
//   changeSearchStockStatus: (data) => dispatch(setSearchStockStatus(data)),
// });

function Header({ isLoggedIn = true, setUserData, ...props }: any) {
  const { setShowLoginPopup, sideNav, setSideNav } = props;
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [menuVisible, setMenuVisible] = useState(null);
  //   const { isLoggedIn,setUserData } = useAuth();
  const router = useRouter();
  useEffect(() => {
    const handleBodyClick = () => {
      setMenuVisible(null);
    };

    document.body.addEventListener("click", handleBodyClick);

    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);

  const handleMenuToggle = (e: any, menuIndex: any) => {
    if (e && typeof e.stopPropagation === "function") {
      e.stopPropagation();
    }
    setMenuVisible((prevMenu) => (prevMenu === menuIndex ? null : menuIndex));
  };

  function loginPopup() {
    console.log("dfkjs");
    setShowLoginPopup(true);
    // setSideNav(false);
    router.push("/");
  }

  const toggleSideMenu = () => {
    setOpenSideMenu(!openSideMenu);
  };

  function logout() {
    updateFCMToken();
    // lastLogoutActivity();
    // const domain = window?.location.hostname === 'localhost' ? '' : '.niftytrader.in';
    // Cookies.remove('_token', { path: '/', domain });
    // Cookies.remove('_PU');
    // Cookies.remove('isOneTap');
    // document.body.classList.remove('dark-theme');
    // document.body.classList.add('light-theme');
    // localStorage.removeItem('_modoOscuro');
    // setUserData();
    // Cookies?.remove('_encUserData', { domain });
    // localStorage.removeItem('_encPlanData');
    // localStorage.removeItem('localFeatures');
    // Cookies?.remove('_encSimulatorPlanData');
    // Cookies?.remove('_encBrokerDataData');
    // Cookies?.remove('_encSimulator');
    // Cookies?.remove('_encPrime');
    // localStorage.removeItem('userPromo');
    // localStorage.removeItem('TR_OI_OC_authRef');
    // localStorage?.removeItem('_BNC_authRef');
    // localStorage?.removeItem('_NC_authRef');
    // localStorage?.removeItem('_FNC_authRef');
    // localStorage?.removeItem('_NFC_authRef');
    // localStorage?.removeItem('_MD_authRef');
    // localStorage?.removeItem('_NOI_authRef');
    // localStorage?.removeItem('_OC_authRef');
    // localStorage?.removeItem('_MSC_authRef');
  }
  function updateFCMToken() {
    const params = {
      fcm_token: "",
    };
    // callAPI('POST', process.env.FCM_LOGIN, params, (res) => {
    //   if (res.status) {
    //     Cookies.remove('fcmToken');
    //   }
    // });
  }

  return (
    <>
      <div className="sticky top-0 bg-white px-4 shadow-[0px_0px_7px_0px_rgba(0,0,0,0.1)] lg:h-[65px] h-[59px] w-full flex items-center z-[110] justify-between">
        <div className="flex items-center">
          <Image
            src={logoImage}
            alt="Logo"
            width={150}
            height={35}
            className="h-[45px]"
          />

          <div className="relative lg:flex items-center ml-6 hidden">
            <Image
              src={serachImage}
              alt="icon"
              width={18}
              height={18}
              className="absolute left-3 select-none"
            />
            <input
              type="text"
              className="h-[40px] bg-[#ECF5FE] xl:w-[300px] w-[250px] rounded-sm pr-3 pl-10 text-[14px] outline-none placeholder:text-[#999999]"
              placeholder="Search Stock"
            />
          </div>
        </div>
        <ul className="lg:flex items-center hidden">
          <li
            className={`xl:mx-3 mx-2 font-medium cursor-pointer xl:text-[14px] text-[13px] select-none 
           ${
             (menuVisible == 0 && "text-primary-text") || "text-black"
           } transition-all duration-200 hover:text-primary-text`}
          >
            <span onClick={(e) => handleMenuToggle(e, 0)}>
              Screener{" "}
              <FontAwesomeIcon
                icon={(menuVisible == 0 && faChevronUp) || faChevronDown}
                width={10}
                className="text-[12px] ml-1"
              />
            </span>
          </li>
          <li
            className={`xl:mx-3 mx-2 text-black font-medium cursor-pointer xl:text-[14px] text-[13px] select-none 
            ${
              (menuVisible == 1 && "text-primary-text") || "text-black"
            } transition-all duration-200 hover:text-primary-text`}
          >
            <span onClick={(e) => handleMenuToggle(e, 1)}>
              Options
              <FontAwesomeIcon
                icon={(menuVisible == 1 && faChevronUp) || faChevronDown}
                width={10}
                className="text-[12px] ml-1"
              />
            </span>
          </li>
          <li
            className={`xl:mx-3 mx-2 text-black font-medium cursor-pointer xl:text-[14px] text-[13px] select-none ${
              (menuVisible == 2 && "text-primary-text") || "text-black"
            } transition-all duration-200 hover:text-primary-text`}
          >
            <span onClick={(e) => handleMenuToggle(e, 2)}>
              Resources
              <FontAwesomeIcon
                icon={(menuVisible == 2 && faChevronUp) || faChevronDown}
                width={10}
                className="text-[12px] ml-1"
              />
            </span>
          </li>
          {/* <li className="xl:mx-3 mx-2">
            <Link className="text-primary-text font-semibold flex items-center text-[13px] xl:text-[15px]" href={'/'}>
              <Image src="/images/yellow-crown.svg" alt="Logo" width={25} height={25} className="mr-2" />
              Refer and Earn
            </Link>
          </li> */}
          <li className="xl:mx-3 mx-2">
            {(menuVisible == 3 && (
              <Image
                src={menu_blueImage}
                alt="Menu"
                width={18}
                height={12}
                className="cursor-pointer"
                onClick={(e) => handleMenuToggle(e, 3)}
              />
            )) || (
              <Image
                src={menuImage}
                alt="Menu"
                width={18}
                height={12}
                className="cursor-pointer"
                onClick={(e) => handleMenuToggle(e, 3)}
              />
            )}
          </li>
          <li className="xl:mx-3 mx-2">
            <Image
              src={shopping_cart}
              alt="Logo"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </li>
          <li className="xl:mx-3 mx-2">
            <Image
              src={notifications_active}
              alt="Logo"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </li>
          {(isLoggedIn && (
            <>
              <li className="xl:mx-3 mx-2 relative">
                <Image
                  src={yellow_crownImage}
                  alt="Logo"
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
              </li>
              <li className="xl:ml-3 ml-2">
                <div className="flex items-center">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value=""
                      className="sr-only peer"
                      // onChange={() => {
                      // }}
                      // checked={}
                    />
                  </label>
                  <div className="relative w-[50px] h-[25px] bg-[url(/images/light_bg.svg)] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-[22px] peer-checked:after:right-[2px] rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[1.5px] after:left-[3px] after:bg-center after:bg-[url(/images/light_mode.svg)] after:rounded-full after:h-[22px] after:w-[22px] after:transition-all peer-checked:bg-[url(/images/dark_bg.svg)] peer-checked:after:bg-[url(/images/dark_mode.svg)]"></div>

                  <p
                    className={`text-[15px] select-none font-medium mb-0 ml-3 text-primary-text`}
                  >
                    Light
                  </p>
                </div>
              </li>
            </>
          )) ||
            ""}
          {(!isLoggedIn && (
            <li className="xl:ml-3 ml-2">
              <button
                className="px-4 py-2 xl:text-[14px] text-[13px] outline-none text-white bg-primary-text rounded-[4px] 
            font-semibold border-primary-text border transition-all duration-200 hover:bg-white hover:text-primary-text"
                onClick={loginPopup}
              >
                Login/Register
              </button>
            </li>
          )) ||
            ""}
        </ul>

        <ul className="flex items-center lg:hidden">
          {(isLoggedIn && (
            <li className="xl:ml-3 ml-2">
              <div className="flex items-center">
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    // onChange={() => {
                    // }}
                    // checked={}
                  />
                  <div className="relative w-[50px] h-[25px] bg-[url(/images/light_bg.svg)] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-[22px] peer-checked:after:right-[2px] rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[1.5px] after:left-[3px] after:bg-center after:bg-[url(/images/light_mode.svg)] after:rounded-full after:h-[22px] after:w-[22px] after:transition-all peer-checked:bg-[url(/images/dark_bg.svg)] peer-checked:after:bg-[url(/images/dark_mode.svg)]"></div>
                </label>
              </div>
            </li>
          )) ||
            ""}
          {(!isLoggedIn && (
            <li className="xl:ml-3 ml-2">
              <button
                className="px-4 py-2 xl:text-[14px] text-[13px] outline-none text-white bg-primary-text rounded-[4px] 
  font-semibold border-primary-text border transition-all duration-200 hover:bg-white hover:text-primary-text"
                onClick={() => setShowLoginPopup(true)}
              >
                Login/Register
              </button>
            </li>
          )) ||
            ""}
          <li className="ml-3 flex items-center">
            <span
              className="material-symbols-outlined font-medium cursor-pointer text-primary-text select-none"
              onClick={toggleSideMenu}
            >
              {(!openSideMenu && "menu") || "close"}
            </span>
          </li>
        </ul>
        {/* Screeners Menu */}
        {screenerData && menuVisible == 0 && (
          <div
            className={`flex items-center w-full max-w-[950px] absolute transition-all duration-300 z-[100]
left-0 right-0 m-auto py-4 px-10 bg-white shadow-[0px_0px_7px_0px_#0000001A] top-[65px]
animate-growDown`}
          >
            <ul className="flex items-center justify-between w-full">
              {screenerData?.length > 0 &&
                screenerData.map((item, key) => (
                  <>
                    <li key={key}>
                      <Link
                        href={item.pageurl}
                        onClick={() => setMenuVisible(null)}
                        className="font-medium text-black transition-all duration-200 hover:text-primary-text text-[15px] flex items-center"
                      >
                        <span
                          className={`w-[45px] h-[45px] flex items-center justify-center rounded-md mr-3
             ${item.label == "Advanced Stock Screener" && "bg-[#ECF5FE]"}
             ${item.label == "Live Market Screener" && "bg-[#FFEAEA]"}
             ${item.label == "Options Screener" && "bg-[#FFF6E4]"}
             `}
                        >
                          <Image
                            src={item.icon}
                            alt="icon"
                            width={24}
                            height={24}
                          />
                        </span>
                        {item.label}
                      </Link>
                    </li>
                    {(key != screenerData?.length - 1 && (
                      <li className="h-[50px] w-[1px] bg-[#BBBBBB]"></li>
                    )) ||
                      ""}
                  </>
                ))}
            </ul>
          </div>
        )}

        {/* Options Menu */}
        {optionsData && menuVisible == 1 && (
          <div
            className={`grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 gap-4 w-full absolute transition-all duration-300 z-[100]
            left-0 right-0 m-auto py-6 px-10 bg-white shadow-[0px_0px_7px_0px_#0000001A] top-[65px]
            animate-growDown`}
          >
            {optionsData.map((item, index) => (
              <div
                key={index}
                className="after:h-full after:block after:w-[1px] after:bg-[#BBBBBB] after:absolute after:right-0 after:top-0 
               pr-3 relative mb-2 last:after:content-none"
              >
                <h4 className="text-[13px] text-[#00498e] font-semibold mb-2">
                  {item.label}
                </h4>
                <ul>
                  {item.links?.length > 0 &&
                    item.links.map((link, key) => (
                      <li key={key} className="mb-2">
                        <Link
                          href={link.pageurl}
                          className="text-[12px] text-[#999999] hover:text-primary-text transition-all duration-200 font-medium
                          flex items-baseline"
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
        {/* Resources Menu */}
        {resourcesData && menuVisible == 2 && (
          <div
            className={`grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 gap-4 w-full absolute transition-all duration-300 z-[100]
          left-0 right-0 m-auto py-6 px-10 bg-white shadow-[0px_0px_7px_0px_#0000001A] top-[65px]
          animate-growDown`}
          >
            {resourcesData.map((item, index) => (
              <div
                key={index}
                className="after:h-full after:block after:w-[1px] after:bg-[#BBBBBB] after:absolute after:right-0 after:top-0 
               pr-3 relative mb-2 last:after:content-none"
              >
                <h4 className="text-[13px] text-[#00498e] font-semibold mb-2">
                  {item.label}
                </h4>
                <ul>
                  {item.links?.length > 0 &&
                    item.links.map((link, key) => (
                      <li key={key} className="mb-2">
                        <Link
                          href={link.pageurl}
                          className="text-[12px] text-[#999999] hover:text-primary-text transition-all duration-200 font-medium
                          flex items-baseline"
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
        {/* Bars Menu */}
        {barsMenuData && menuVisible == 3 && (
          <div
            className={`grid md:grid-cols-3 w-full max-w-[870px] absolute transition-all duration-300 z-[100]
           right-[280px] m-auto py-6 bg-white shadow-[0px_0px_7px_0px_#0000001A] top-[65px]
          animate-growDown`}
          >
            <div
              className="after:h-full after:block after:w-[1px] after:bg-[#BBBBBB] after:absolute after:right-0 after:top-0 
              px-10 flex justify-center flex-col relative mb-2"
            >
              {barsMenuData.slice(0, 7).map((item, index) => (
                <Link
                  key={index}
                  href={item?.pageurl}
                  onClick={() => setMenuVisible(null)}
                  className="font-medium text-black transition-all duration-200
                  mb-3 hover:text-primary-text text-[15px] flex items-center"
                >
                  <span
                    className={`w-[45px] h-[45px] flex items-center justify-center rounded-md mr-3
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
                      src={"/images/" + item.icon + ".svg"}
                      alt="icon"
                      width={20}
                      height={20}
                    />
                  </span>
                  {item.label}
                </Link>
              ))}
            </div>
            <div
              className="after:h-full after:block after:w-[1px] after:bg-[#BBBBBB] after:absolute after:right-0 after:top-0 
              px-10 flex justify-center flex-col relative mb-2"
            >
              {barsMenuData.slice(7).map((item, index) => (
                <Link
                  key={index}
                  href={item?.pageurl}
                  onClick={() => setMenuVisible(null)}
                  className="font-medium text-black transition-all duration-200
                  mb-3 hover:text-primary-text text-[15px] flex items-center"
                >
                  <span
                    className={`w-[45px] h-[45px] flex items-center justify-center rounded-md mr-3 
                    ${item.label == "GIFT NIFTY" && "bg-[#FFECE4]"}
                    ${item.label == "News" && "bg-[#FFEAEA]"}
                    ${item.label == "IPO" && "bg-[#ECF5FE]"}
                    ${item.label == "Option Strategy" && "bg-[#F3E8FF]"}
                    ${item.label == "Options Simulator" && "bg-[#FFEFFC]"}
                    ${item.label == "Prime" && "bg-[#FFF6E4]"}
                    ${item.label == "Blog" && "bg-[#E7FAFF]"}
                    `}
                  >
                    <Image src={item.icon} alt="icon" width={20} height={20} />
                  </span>
                  {item.label}
                </Link>
              ))}
            </div>
            <div>
              <div className="mx-auto w-max">
                <div className="border w-max">
                  <Image
                    src={menu_qr_codeImage}
                    alt="QR"
                    width={200}
                    height={200}
                  />
                </div>
                <h5 className="text-black text-[16px] mt-2 font-semibold">
                  Download Now
                </h5>
                <p className="text-[#999999] text-[16px] font-semibold">
                  For Android & IOS
                </p>
              </div>
            </div>
          </div>
        )}
        {/* User menu */}
        {profileData && menuVisible == 4 && (
          <div
            className={`w-[210px] absolute transition-all duration-300 z-[100]
       right-[140px] m-auto py-2 bg-white shadow-[0px_0px_7px_0px_#0000001A] top-[65px]
      animate-growDown`}
          >
            <ul>
              {profileData?.length > 0 &&
                profileData.map((item, key) => (
                  <li key={key}>
                    {item?.label === "Logout" ? (
                      <Link
                        href={item.pageUrl}
                        className="pl-5 pr-3 py-3 w-full text-black text-[15px] hover:bg-[#ecf5fe] transition-all duration-200
                         hover:text-primary-text border-l-2 border-l-transparent hover:border-l-primary-text flex items-center"
                      >
                        <Image
                          src={item.icon}
                          alt="icon"
                          width={22}
                          height={22}
                          className="mr-3"
                        />
                        <span>{item.label}</span>
                      </Link>
                    ) : (
                      <Link
                        href={item.pageUrl}
                        className="pl-5 pr-3 py-3 w-full text-black text-[15px] hover:bg-[#ecf5fe] transition-all duration-200
                  hover:text-primary-text border-l-2 border-l-transparent hover:border-l-primary-text flex items-center"
                      >
                        <Image
                          src={item.icon}
                          alt="icon"
                          width={22}
                          height={22}
                          className="mr-3"
                        />
                        <span>{item.label}</span>
                      </Link>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
      <MobileNav toggleSideMenu={toggleSideMenu} openSideMenu={openSideMenu} />
    </>
  );
}

export default Header;
