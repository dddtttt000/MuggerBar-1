import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function Mylist({ recipeList , handleClickNumRecipe}) {
  // console.log("recipeList", recipeList);
  // console.log("recipeList title", recipeList.recipe_title);
  return (
    <Link to="/recipes">
      <div className="mylist-wrap" onClick={()=>(handleClickNumRecipe(recipeList.id))} >
        <ul>
          <li>
            <div>{recipeList.recipe_title}</div>
          </li>
        </ul>
      </div>
    </Link>
  );
}

export default Mylist;
