import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainNav from "../components/MainNav";
import MainSearch from "../components/MainSearch";
import MainContentsbox from "../components/MainContentsBox";
import Footer from "../components/Footer";
import axios from "axios";
import dummyRecipes from "../dummy/recipelist.js"
import MainContent from "../components/MainContent.js"

function Mainpage() {
  const [receivedRecipe, setReceivedRecipe] = useState([]);
  const [recipes, setRecipe] = useState([]); 
  const isSearchingRecipe = (arr, text) => {
    return arr.filter((ele)=>{return ele.recipe_title.includes(text)})
  }

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
      <MainNav />
      <div className="main-img">
        <img src="https://user-images.githubusercontent.com/78816754/136383285-422914ee-9724-4500-aea6-ffff157ba759.png" alt="MuggerBar-Main image" />
      </div>

      <div className="main-search-bar">
        <MainSearch handleSetRecipe={handleSetRecipe} handleResetRecipe={handleResetRecipe} />
      </div>

      <MainContentsbox recipes={recipes} />
      {/* <Link to="./Recipes">컨텐츠 클릭시</Link> */}
      <Footer />
    </>
  );
}

export default Mainpage;
