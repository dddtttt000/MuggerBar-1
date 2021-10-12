import React, { useState } from "react";

function Mylist({ recipeList }) {
  console.log("recipeList", recipeList);
  console.log("recipeList title", recipeList.recipe_title);
  return (
    <div className="mylist-wrap">
      <ul>
        <li>
          <a href="">{recipeList.recipe_title}</a>
        </li>
      </ul>
    </div>
  );
}

export default Mylist;
