import React, { useState } from "react";
import { Link } from "react-router-dom";
import PostingNav from "../components/PostingNav";
import Summery from "../components/Summary";
import { CKEditor } from "../inc/index.js";
import Footer from "../components/Footer";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Posting() {
  const [post, setPost] = useState({
    recipe_title : "",
    recipe_subtitle : "",
  });
  // console.log(post)

  const [content, setContent] = useState({
    recipe_content: "",
  });

  const history = useHistory();

  // console.log(content);
  const handleInputValue = (key) => (e) => {
    setPost({ ...post, [key]: e.target.value });
  };

  const handlecontent = (data) =>{
    let content =data.replace(/(<([^>]+)>)/ig,"")
    setContent({recipe_content:content})
  }

  // function --> 기존 데이터 DB에 얘도 추가시키는 함수...How?
  const [recipe_photo, setRecipe_photo] = useState("이미지경로");

  const handleposting = () => {
    const { recipe_title, recipe_subtitle } = post;
    const { recipe_content } = content;
    axios
      .post(
        "https://muggerbar.ml/recipe",
        {
          recipe_title: recipe_title,
          recipe_subtitle: recipe_subtitle,
          recipe_photo: recipe_photo,
          recipe_content: recipe_content,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        //console.log("res ???", res.status, "로그인성공");
        console.log(res.data.data);
        history.push("/");
      })
      .catch((err) => {
        //console.log("err message =>", err);
      });
  };

  const handleFileOnChange = (event) => {
    const formData = new FormData();
    formData.append("profile_img", event.target.files[0]);
    axios
      .post("https://muggerbar.ml/api/users/upload", formData, {
        header: { "content-type": "multipart/form-data" },
      })
      .then((response) => {
        console.log(response.data.fileName);
        setRecipe_photo(response.data.fileName);
      });
  };

  return (
    <>
      <PostingNav handleposting={handleposting} />
      <div className="posting-wrap">
        <div className="up-img">🧑🏻‍🍳 업로드 할 사진을 선택해 주세요.</div>

        <form enctype="multipart/form-data">
          <input
            type="file"
            accept="image/jpg,image/png,image/jpeg,image/gif"
            name="profile_img"
            placeholder="업로드"
            onChange={(e) => handleFileOnChange(e)}
          ></input>
        </form>
        <hr className="ps-hr"></hr>

        <Summery handleInputValue={handleInputValue} />

        <CKEditor
          config={({ height: 750 }, { width: 700 }, { allowedContent: true })}
          handlecontent={handlecontent}
        />

        <div className="">
          <button
            className="mainBtn ps-save ps-save-wrap"
            onClick={handleposting}
          >
            <i class="fas fa-download"></i> 저장하기
          </button>
        </div>
      </div>
    </>
  );
}

export default Posting;
