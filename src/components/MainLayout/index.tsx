import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Router, { useRouter } from "next/navigation";
// import { useAuth } from '../../_contexts/auth';

// import {
//   setNewsList,
//   setStockList,
//   showForgotPasswordPopup,
//   showLoggedInPopup,
//   showRegisterPopup,
// } from '../../_redux/actions';

// const mapStateToProps = (state:any) => ({
//   isLoggedInPopup: state.user.isLoggedInPopup,
//   isRegisterPopup: state.user.isRegisterPopup,
//   isForgotPasswordPopup: state.user.isForgotPasswordPopup,
//   latestNewsList: state.news.newsList,
// });

// const mapDispatchToProps = (dispatch) => ({
//   setShowLoginPopup: (data) => {
//     dispatch(showLoggedInPopup(data));
//   },
//   setShowForgotPasswordPopup: (data) => {
//     dispatch(showForgotPasswordPopup(data));
//   },
//   setShowRegisterPopup: (data) => {
//     dispatch(showRegisterPopup(data));
//   },
//   setStockList: (data) => {
//     dispatch(setStockList(data));
//   },
//   setNewsList: (data) => {
//     dispatch(setNewsList(data));
//   },
// });

function PageLayout({
  isLoggedIn,
  metaData,
  children = <h1>Pages for Application</h1>,
  isLoggedInPopup,
  isRegisterPopup,
  setShowLoginPopup,
  setShowRegisterPopup,
  setStockList,
  isForgotPasswordPopup,
  setShowForgotPasswordPopup,
  latestNewsList,
  setNewsList,
}: any) {
  const [isVisible, setIsVisible] = useState(false);
  const [popupStatus, setPopupStatus] = useState(false);
  const [isTappedLoggedIn, setIsTappedLoggedIn] = useState(false);
  const [isSWAvailable, setIsSWAvailable] = useState(false);
  const [banner, setBanner] = useState(false);
  const [bannerData, setBannerData] = useState([]);
  const [loginModelStatus, setLoginModelStatus] = useState(false);

  // const {
  //   isPrimeMember,
  //   globalData,
  //   setUserData,
  //   isLoggedIn,
  //   isContextLoaded,
  // } = useAuth();

  function closePopup() {
    // Cookies.set("popupStatus", "off", { expires: 1 });
    setPopupStatus(false);
  }

  function openLoginPopup() {
    setShowRegisterPopup(false);
    setShowForgotPasswordPopup(false);
    setShowLoginPopup(true);
  }

  function openRegisterPopup() {
    setShowLoginPopup(false);
    setShowRegisterPopup(true);
  }

  function closeModal(status = false) {
    setShowLoginPopup(false);
    setLoginModelStatus(false);
    setShowRegisterPopup(false);
    setShowForgotPasswordPopup(false);
    // if (!isPrimeMember && Cookies.get("url") && status) {
    //   const url = Cookies.get("url");
    //   Cookies.remove("url");
    //   Router.push(url);
    // }
    // Cookies.remove("url");
  }

  return (
    <>
      {/* {isLoggedInPopup && !isLoggedIn && (
        <LoginModal
          openRegisterPopup={openRegisterPopup}
          closeModal={closeModal}
          setLoginModelStatus={setLoginModelStatus}
        />
      )}
      {isRegisterPopup && !isLoggedIn && (
        <RegisterModal
          openLoginPopup={openLoginPopup}
          closeModal={closeModal}
        />
      )} */}
      <div className="wrapper">
        <div id="content">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default PageLayout;
