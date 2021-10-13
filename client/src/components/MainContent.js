import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function MainContent({ recipe }) {
  return (
    // <div className="itemCard">
    //   <img src="https://t1.daumcdn.net/cfile/blog/1440AD344D06487323" alt="목업용 이미지"/>
    //   <h3 className="itemCardTitle">{recipe.recipe_title}</h3>
    //   <div>{recipe.recipe_subtitle}</div>
    //   <div>{recipe.recipe_photo}</div>
    //   <div>{recipe.recipe_content}</div>
    // </div>

    <div className="itemCard">
      <div>
        <img src={`https://muggerbar.ml/${recipe.recipe_photo}`} alt={recipe.idx} />
      </div>
      <div>
        <h3 className="itemCardTitle">{recipe.recipe_title}</h3>
        <div>{recipe.recipe_subtitle}</div>
      </div>
    </div>
  );
}

export default MainContent;
