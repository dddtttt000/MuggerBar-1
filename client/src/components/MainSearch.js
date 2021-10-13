import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function MainSearch({ handleSetRecipe, handleResetRecipe }) {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <div className="main-searchbar">
        <div className="search-wrap">
          <i class="fas fa-search"></i>
          <input
            className="login-text search-bar"
            placeholder="레시피를 검색해 보세요."
            value={searchText}
            type="text"
            onChange={(e) => handleChange(e)}
          />
          <div className="s-btn-wrap">
            <input
              type="submit"
              value="검색"
              onClick={() => handleSetRecipe(searchText)}
            />
            <input
              type="submit"
              value="초기화"
              onClick={() => handleResetRecipe()}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSearch;
