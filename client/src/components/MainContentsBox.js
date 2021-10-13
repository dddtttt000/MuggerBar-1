import React, { useState } from "react";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import MainContent from "./MainContent";
import axios from "axios";

function MainContentsbox({ totalRecipes, handleClickNumRecipe }) {
  const [itemList, setItemList] = useState(false);

  const history = useHistory();
  // 클릭 하면 recipe/id 페이지로 이동하는 함수를 만든다.
  // axios.get
  // const goToRecipesPage = () => {
  //   axios.get(`https://muggerbar.ml/recipe/${recipe.id}`).then((res) => {
  //     console.log("res");
  //     history.push(`https://muggerbar.ml/recipe/${recipe.id}`);
  //   });
  // };

  return (
    <div class="itemList">
      {totalRecipes.map((recipe, idx) => {
        return (
          <MainContent
            key={idx}
            recipe={recipe}
            handleClickNumRecipe={handleClickNumRecipe}
          />
        );
      })}
    </div>
  );
}

export default MainContentsbox;
