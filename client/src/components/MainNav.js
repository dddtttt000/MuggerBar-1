import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function MainNav({ handleLogout, isLogin }) {
  // console.log("main nav isLoin", isLogin);

  return (
    <>
      <div className="mainNav">
        <a className="logo-mainNav" href="/">
          <div className="logo-mainNav "></div>
        </a>

        <div className="nav-btn-wrap">
          <div className="">
            <Link to={isLogin ? "./posting" : "./login"}>
              {/* <Link to="./posting"> */}
              <button type="submit" className="mainBtn m-post">
                <div className="m-btn-img" />
                레시피 등록
              </button>
            </Link>
          </div>

          {isLogin ? (
            <div className="">
              <button
                type="submit"
                className="mainBtn m-sign"
                onClick={handleLogout}
              >
                로그아웃
              </button>
            </div>
          ) : (
            <div className="">
              <Link to="./login">
                <button type="submit" className="mainBtn m-sign">
                  로그인
                </button>
              </Link>
            </div>
          )}

          {isLogin ? (
            <div className="">
              <Link to="./mypage">
                <button type="submit" className="mainBtn m-my">
                  마이페이지
                </button>
              </Link>
            </div>
          ) : (
            <div className="">
              <Link to="./signup">
                <button type="submit" className="mainBtn m-my">
                  회원가입
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MainNav;
