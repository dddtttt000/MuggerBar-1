import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainNav from "../components/MainNav";
import MainSearch from "../components/MainSearch";
import MainContentsbox from "../components/MainContentsBox";
import Footer from "../components/Footer";
import axios from "axios";
import dummyRecipes from "../dummy/recipelist.js";
import MainContent from "../components/MainContent.js";



function Mainpage() {
  const [receivedRecipe, setReceivedRecipe] = useState([]);
  const [recipes, setRecipe] = useState([]); 
  


  const isSearchingRecipe = (arr, text) => {
    return arr.filter((ele) => {
      return ele.recipe_title.includes(text);
    });
  };

  const handleSetRecipe = (searchText) => {
    const searchedRecipe = isSearchingRecipe(recipes, searchText);
    setRecipe(searchedRecipe);

  }
  
  const handleResetRecipe = ()=>{
    setRecipe(receivedRecipe)
  }


  // 레시피 게시물 전부 불러오는 함수
  const handleGetRecipe = () => {

    axios.get("https://muggerbar.ml/recipe",
    null,
    { headers: { "Content-Type": "application/json" }})
    .then((res)=>{
      setReceivedRecipe(res.data.data.recipe);
      setRecipe(res.data.data.recipe);
    })
    .catch((err) => console.log(err));
  }
  
  useEffect(()=>{
    handleGetRecipe()
  },[])
  

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
        <MainContentsbox recipes={recipes} />
        {/* <Link to="./Recipes">컨텐츠 클릭시</Link> */}
      </div>
    </>
  );
}

export default Mainpage;
