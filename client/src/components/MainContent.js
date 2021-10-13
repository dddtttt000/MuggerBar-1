import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function MainContent({ recipe, handleClickNumRecipe }) {
  const num = recipe.id
  return (
    <Link to="./recipe/recipe.id">
      <div className="itemCard" >
        <div onClick={()=>(handleClickNumRecipe(num))}>
          <img src={`https://muggerbar.ml/${recipe.recipe_photo}`} alt={recipe.idx} />
        </div>
        <div>
          <h3 className="itemCardTitle">{recipe.recipe_title}</h3>
          <div>{recipe.recipe_subtitle}</div>
        </div>
      </div>
    </Link>
  );
}

export default MainContent;
