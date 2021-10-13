import React, { Component, useEffect, useState } from "react";
import MainNav from "../components/MainNav";
import MainSearch from "../components/MainSearch";
import MainContentsbox from "../components/MainContentsBox";
import Footer from "../components/Footer";
import axios from "axios";
import dummyRecipes from "../dummy/recipelist.js";
import MainContent from "../components/MainContent.js";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function Mainpage({handleSetRecipe, handleResetRecipe, totalRecipes, handleClickNumRecipe}) {
  return (
    <>
      <center>
        <div className="main-top">
          <div className="main-img"></div>
          <div className="main-text">
            둘이먹다 하나가 죽어도 모를만한 특별한 레시피만 모았다!
          </div>
        </div>
      </center>

      <div className="main-search-bar">
        <MainSearch
          handleSetRecipe={handleSetRecipe}
          handleResetRecipe={handleResetRecipe}
        />
      </div>
      <div className="main-content-wrap">
        <MainContentsbox totalRecipes={totalRecipes} handleClickNumRecipe={(e)=>(handleClickNumRecipe(e))}/>
        {/* <Link to="./Recipes">컨텐츠 클릭시</Link> */}
      </div>
    </>
  );
}

export default Mainpage;
