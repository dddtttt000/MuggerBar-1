import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function MainContent({ recipe, handleClickNumRecipe }) {
  const num = recipe.id
  return (

     <Link to="./recipe/recipe.id">
    <div className="itemCard">
      <div className="card-img" onClick={()=>(handleClickNumRecipe(num))}>
        <img className="card-img" src={`https://muggerbar.ml/${recipe.recipe_photo}`} alt={recipe.idx} />
      </div>
      <div className="card-text">
        <div className="card-title">{recipe.recipe_title}</div>
        <div className="card-sub">{recipe.recipe_subtitle}</div>
        </Link>

  );
}

export default MainContent;
