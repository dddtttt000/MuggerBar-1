import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Posting from "../pages/Posting";

function PostingNav({ handleposting }) {
  return (
    <div className="mainNav">
      <div className="logo-mainNav"></div>

      <div className="nav-btn-wrap">
        <div className="">
          <Link to="">
            <button
              type="submit"
              className="mainBtn ps-save"
              onClick={() => handleposting()}
            >
              <i class="fas fa-download"></i> 저장하기
            </button>
          </Link>
        </div>

        <div className="">
          <Link to="./mypage">
            <button type="submit" className="mainBtn ps-my">
              마이페이지
            </button>
          </Link>
        </div>

        <div className="">
          <button type="submit" className="mainBtn ps-out">
            로그아웃
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostingNav;
