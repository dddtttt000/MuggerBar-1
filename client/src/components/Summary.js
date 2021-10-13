import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function Summery({ handleInputValue }) {
  const isHandleRecipeCategory = () => {};

  return (
    <div className="summ-wrap">
      <div className="summ-title">
        제목
        <input
          id="title"
          className=""
          placeholder="요리의 이름을 정해주세요."
          type="text"
          onChange={handleInputValue("recipe_title")}
        />
      </div>
      <div className="summ-title">
        한줄설명
        <input
          className=""
          placeholder="40자 이내로 작성해 주세요."
          type="text"
          onChange={handleInputValue("recipe_subtitle")}
        />
      </div>
      {/* <div className="summ-title">
        카테고리 선택
        <select
          className=""
          name="category"
          onChange={(e) => isHandleRecipeCategory(e)}
        >
          <option value="">----select category----</option>
          <option value="면">면</option>
          <option value="밥">밥</option>
          <option value="국/찌개/스프">국/찌개/스프</option>
          <option value="반찬/술안주">반찬/술안주</option>
          <option value="디저트">디저트</option>
          <option value="">카테고리를 정할 수 없다! 신박템👽</option>
        </select>
      </div> */}
    </div>
  );
}

export default Summery;
