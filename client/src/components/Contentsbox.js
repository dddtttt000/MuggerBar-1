import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function Contentsbox() {
  return (
    <div>
      '서치바 입력어에 걸리는 컨텐츠만 필터링해서 보여줄 것임.'
      {/* 이 안에 <Contetns /> 컴포넌트들이 들어올 것임. */}
      <Link to="./Recipes">상세페이지</Link>
    </div>
  );
}

export default Contentsbox;
