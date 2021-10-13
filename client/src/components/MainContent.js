import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function MainContent({ recipe }) {
  return (
    <div className="itemCard">
      <div className="card-img">
        <img className="card-img" src={recipe.recipe_photo} alt={recipe.idx} />
      </div>
      <div className="card-text">
        <div className="card-title">{recipe.recipe_title}</div>
        <div className="card-sub">{recipe.recipe_subtitle}</div>
      </div>
    </div>
  );
}

export default MainContent;
