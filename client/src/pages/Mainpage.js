import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainNav from "../components/MainNav";
import MainSearch from "../components/MainSearch";
import MainContentsbox from "../components/MainContentsBox";
import Footer from "../components/Footer";

function Mainpage({ handleLogout, isLogin, userInfo }) {
  console.log("main page isLogin", isLogin);
  console.log("main page userInfo", userInfo);

  return (
    <>
      <div className="main-img">
        <img src="" alt="MuggerBar-Main image" />
      </div>

      <div className="main-search-bar">
        <MainSearch />
      </div>

      <MainContentsbox />
      <Link to="./recipe">컨텐츠 클릭시</Link>
    </>
  );
}

export default Mainpage;
