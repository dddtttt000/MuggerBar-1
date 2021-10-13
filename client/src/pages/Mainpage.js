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
  const [receivedRecipe, setReceivedRecipe] = useState(dummyRecipes); // 초기화 위한 애 - 누르면 서버에서 받아온 리스트 뜨는 게 아니라, 아무 것도 안뜨게 하려면?
  const [recipes, setRecipe] = useState(dummyRecipes); 
  
  const isSearchingRecipe = (arr, text) => {
    return arr.filter((ele)=>{
      return ele.recipe_title.includes(text)
    });
  };
  // 배열, 텍스트(검색어) 입력받아 => 검색어를 포함한(includes메소드 사용) element만 남김

  const handleSetRecipe = (searchText) => {
    const searchedRecipe = isSearchingRecipe(recipes, searchText);
    setRecipe(searchedRecipe);
  }
  
  const handleResetRecipe = ()=>{
    setRecipe(receivedRecipe)
  }

  const handleGetRecipe = () => {
    axios.get("https://localhost:4000/recipe",null,null)
    .then((res)=>{
      console.log(res);
      setReceivedRecipe(res.data.recipe);
      setRecipe(res.data.recipe);
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

    <div className="main-contents-wrap">
      {recipes.length === 0
        ? <div className="empty-result">
            <div><img src = "https://i.pinimg.com/originals/43/ff/b8/43ffb8fd6684db95623105b9f588d931.gif"/></div>
            <div>검색 결과가 없습니다.</div>
          </div>
        : <MainContentsbox recipes={recipes} />
        }
      {/* <Link to="./Recipes">컨텐츠 클릭시</Link> */}
    </div>
    
      <Footer />
    </>
  );
}

export default Mainpage;
