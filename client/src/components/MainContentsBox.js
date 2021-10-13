import React, { useState } from "react";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import MainContent from "./MainContent";
import axios from "axios";

function MainContentsbox({ recipes }) {
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
      {recipes.map(function (recipe, id) {
        return (
          <MainContent
            key={id}
            recipe={recipe}
            onClick={() =>
              axios
                .get(`https://muggerbar.ml/recipe/${id}`)
                .then((res) => {
                  console.log("res");
                  history.push(`https://muggerbar.ml/recipe/${id}`);
                })
                .catch((err) => console.log(err))
            }
          />
        );
      })}
    </div>
  );
}

export default MainContentsbox;
