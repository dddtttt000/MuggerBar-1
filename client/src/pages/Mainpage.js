import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainNav from "../components/MainNav";
import MainSearch from "../components/MainSearch";
import MainContentsbox from "../components/MainContentsBox";
import Footer from "../components/Footer";
import axios from "axios";
import dummyRecipes from "../dummy/recipelist.js";
import MainContent from "../components/MainContent.js";

function Mainpage({ handleLogout, isLogin, userInfo }) {
  console.log("main page isLogin", isLogin);
  console.log("main page userInfo", userInfo);

  const [receivedRecipe, setReceivedRecipe] = useState(dummyRecipes);
  const [recipes, setRecipe] = useState(dummyRecipes);

  const isSearchingRecipe = (arr, text) => {
    return arr.filter((ele) => {
      return ele.recipe_title.includes(text);
    });
  };

  const handleSetRecipe = (searchText) => {
    const searchedRecipe = isSearchingRecipe(dummyRecipes, searchText);
    setRecipe(searchedRecipe);
  };

  const handleResetRecipe = () => {
    setRecipe(dummyRecipes);
  };

  const handleGetRecipe = () => {
    axios
      .get("https://muggerbar.ml/recipe", null, null)
      .then((res) => {
        console.log(res);
        setReceivedRecipe(res.data.recipe);
        setRecipe(res.data.recipe);
      })
      .catch((err) => console.log(err));
  };

  // useEffect(()=>{
  //   handleGetRecipe()
  // },[])

  return (
    <>
      <div className="main-img">
        <img
          src="https://user-images.githubusercontent.com/78816754/136383285-422914ee-9724-4500-aea6-ffff157ba759.png"
          alt="MuggerBar-Main image"
        />
      </div>

      <div className="main-search-bar">
        <MainSearch
          handleSetRecipe={handleSetRecipe}
          handleResetRecipe={handleResetRecipe}
        />
      </div>

      <MainContentsbox recipes={recipes} />
      {/* <Link to="./Recipes">컨텐츠 클릭시</Link> */}
      <Footer />
    </>
  );
}

export default Mainpage;
