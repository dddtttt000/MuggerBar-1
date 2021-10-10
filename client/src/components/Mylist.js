import React, { useState } from "react";

function Mylist() {
  const [recipeList, setRecipeList] = useState("");
  const [hasLists, setHasLists] = useState(false);

  const hasListsHandler = () => {
    setHasLists(true);
  };
  return (
    <div className="mylist-wrap">
      <ul>
        <li>
          <a href="#1">- 여기에 글 목록이 나옵니다.</a>
        </li>
        <li>
          <a href="#2">여기에 글 목록이 나옵니다.</a>
        </li>
        <li>
          <a href="#3">여기에 글 목록이 나옵니다.</a>
        </li>
      </ul>
    </div>
  );
}

export default Mylist;
