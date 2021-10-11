import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Summery() {
  return(
    <>
      <div id="title-container">
        요리명
        <input placeholder="요리의 이름을 정해주세요." type="text" />
      </div>

      <div id="brief-description-container">
        한줄설명
        <input placeholder="20글자 이내로 작성해 주세요." type="text" />
      </div>
      
      <div id="select-catgory-container">
        카테고리 선택
        <select name="category">
            <option value="">----select category----</option>
            <option value="면요리">면</option>
            <option value="">밥</option>
            <option value="">국/찌개/스프</option>
            <option value="">반찬/술안주</option>
            <option value="">디저트</option>
            <option value="">카테고리를 정할 수 없다! 신박템👽</option>
        </select>
      </div>
    </>
  )
};

export default Summery;