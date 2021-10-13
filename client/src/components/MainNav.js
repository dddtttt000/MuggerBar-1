import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function MainNav({ handleLogout, isLogin }) {
  // console.log("main nav isLoin", isLogin);

  return (
    <>
      <div className="mainNav">
        <div className="logo-mainNav"></div>
        <div className="nav-btn-wrap">
          <div className="">
            {/* <Link to={isLogin ? "./posting" : "./login"}> */}
            <Link to="./posting">
              <button type="submit" className="mainBtn">
                레시피 등록
              </button>
            </Link>
          </div>

          {isLogin ? (
            <div className="">
              <button type="submit" className="mainBtn" onClick={handleLogout}>
                로그아웃
              </button>
            </div>
          ) : (
            <div className="">
              <Link to="./login">
                <button type="submit" className="mainBtn">
                  로그인
                </button>
              </Link>
            </div>
          )}

          {isLogin ? (
            <div className="">
              <Link to="./mypage">
                <button type="submit" className="mainBtn">
                  마이페이지
                </button>
              </Link>
            </div>
          ) : (
            <div className="">
              <Link to="./signup">
                <button type="submit" className="mainBtn">
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
