import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainNav from "../components/MainNav";
import MainSearch from "../components/MainSearch";
import MainContentsbox from "../components/MainContentsBox";
import Footer from "../components/Footer";

function Mainpage() {
  return (
    <>
      <MainNav />
      <div className="main-img">
        <img
          src="https://user-images.githubusercontent.com/78816754/136383285-422914ee-9724-4500-aea6-ffff157ba759.png"
          alt="MuggerBar-Main image"
        />
      </div>

      <div className="main-search-bar">
        <MainSearch />
      </div>

      <MainContentsbox />
      <Link to="./Recipes">컨텐츠 클릭시</Link>
      <Footer />
    </>
  );
}

export default Mainpage;
