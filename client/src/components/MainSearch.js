import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function MainSearch({handleSetRecipe, handleResetRecipe}) {
  const [searchText, setSearchText] = useState('')

  const handleChange = (e) => {
    setSearchText(e.target.value)
  }

  return (
    <>
      <div className="main-searchbar">
        <i class="fas fa-search"></i>
        <input placeholder="검색어를 입력하세요." value={searchText} type="text" onChange={(e) => handleChange(e)} />
        <input type="submit" value="검색" onClick={() => handleSetRecipe(searchText)} />
        <input type="submit" value="초기화" onClick={() => handleResetRecipe()} />
      </div>
    </>
  );
};

export default MainSearch;