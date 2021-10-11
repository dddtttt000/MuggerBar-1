import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function MainSearch() {
  return (
    <>
      <div className="main-searchbar">      
        <i class="fas fa-search"></i>
        <input placeholder="검색어를 입력하세요." type="text" />
        <input type="submit" value="검색" />
      </div>
    </>
  )
};

export default MainSearch;