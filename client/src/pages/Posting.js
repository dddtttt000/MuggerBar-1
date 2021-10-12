import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PostingNav from '../components/PostingNav';
import Summery from '../components/Summary';
import { CKEditor } from '../inc/index.js';
import Footer from '../components/Footer';
import axios from 'axios';
import { useHistory } from "react-router-dom";


function Posting() {

  const [post, setPost] = useState({
    recipe_title : "",
    recipe_subtitle : "",
    recipe_photo: "양념사진",
  });
  // console.log(post)
  const [content, setContent] = useState({
    recipe_content: ""
  })

  const history = useHistory();

  console.log(content)
  const handleInputValue = (key) => (e) => {
    setPost({ ...post, [key]: e.target.value });
  };


  const handlecontent = (data) =>{

    setContent({recipe_content:data})
  }
//   onCashange  = data => { 
//     console.log( "Called" );
//     this.setState({
//         content : data.getData()
//     })
//  }
  // function --> 기존 데이터 DB에 얘도 추가시키는 함수...How?
  
  const handleposting = () =>{
    const { recipe_title, recipe_subtitle, recipe_photo } = post;
    const { recipe_content } = content
    axios.
    post("https://muggerbar.ml/recipe",
    {
      recipe_title:recipe_title,
      recipe_subtitle:recipe_subtitle,
      recipe_photo:recipe_title,
      recipe_content:recipe_content
    },
    {
      withCredentials: true
    })
    .then((res) => {
      //console.log("res ???", res.status, "로그인성공");
      console.log(res.data.data)
      history.push("/recipes")
    })
    .catch((err) => {
      //console.log("err message =>", err);
    });
  }
  return (
  <>
    <PostingNav handleposting={handleposting}/>

    <div class="PostingImgFinder">
      <input type="file" />
      <input type="submit" value="첨부하기" />
    </div>
    
    <Summery handleInputValue={handleInputValue}/>
    
    {/* <CKEditor 
      data="This is an example CKEditor 4 WYSIWYG editor instance."
      type="classic"
      config={ { height: 750 },{ width: 700 }, { allowedContent: true } }
      // onChange = { ( event, editor ) => { 
      //   onCashange( editor.getData() );
      //   // console.log(data);}    
        /> */}
    <CKEditor config={ { height: 750 },{ width: 700 }, { allowedContent: true } }
    handlecontent={handlecontent}/> 

    <div className="publishBtn">
      <button onClick={handleposting}>저장하기</button>
    </div>

    <Footer />
  </>
  )
};

export default Posting;