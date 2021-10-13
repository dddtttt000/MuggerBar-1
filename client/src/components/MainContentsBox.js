import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import MainContent from "./MainContent";

function MainContentsbox({ totalRecipes, handleClickNumRecipe }) {
  const [itemList, setItemList] = useState(false);

  // return (
  //   <div class="itemList">
  //     {
  //       itemList === false
  //       ? <MainContent />
  //       : "검색결과가 없습니다."
  //     }
  //   </div>
  // )

  return (
    <div class="itemList">
      {totalRecipes.map((recipe, idx) => {
        return <MainContent key={idx} recipe={recipe} handleClickNumRecipe={handleClickNumRecipe}/>;
      })}
    </div>
  );
}

export default MainContentsbox;
