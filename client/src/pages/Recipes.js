import React, { Component, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Comment from "../components/Comment";
import dummyComments from "../dummy/comments";
import DeleteModal from "../components/DeleteModal";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

axios.defaults.withCredentials = true;

function Recipes({ totalRecipes, clickNumRecipe, userInfo }) {
  const [comments, setComments] = useState(dummyComments);
  const [commentContent, setCommentContent] = useState("");
  const [msg, setMsg] = useState("");
  const [like, setLike] = useState(0);
  const [isClick, setIsClick] = useState(false);
  const [isMyContent, setIsMyContent] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [recipeUserInfo, setRecipeUserInfo] = useState("");

  const history = useHistory();

  const [renderRecipe, setRenderRecipe] = useState({});

  const handleRenderingRecipe = (num) => {
    const result = totalRecipes.filter((recipe) => recipe.id === num);
    setRenderRecipe(...result);
  };

  const takeRecipeUserNickName = (id) => {
    axios
      .get(`https://muggerbar.ml/recipeUserinfo?id=${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setRecipeUserInfo(res.data.data.userInfo.user_nickname);
      });
  };

  // TODO: props 로 받아온 userInfo 의 email 과 게시물을 작성한 유저의 email 이 같으면,
  // 삭제하기 버튼을 보여주고, 아니면 안보여준다. -> isMyContent
  const showDeleteButton = () => {
    // if (userInfo.user_id === recipe_id) {
    // }
    setIsMyContent(true);
  };

  // TODO: 서버에서 댓글 불러오기
  const getComments = () => {
    axios
      .get(`https://muggerbar.ml/comment/`, { withCredentials: true })
      .then((res) => {
        console.log("get success", res);
        setComments(res);
      });
  };

  // TODO: 서버에 댓글 등록 post 요청 후 성공 시 댓글 목록에 포함
  const postComment = () => {
    axios
      .post("https://muggerbar.ml/comment", {
        recipe_id: "recipe_id",
        comment_content: commentContent,
      })
      .then((res) => {
        console.log("post success", res);
      });
  };

  const handleButtonClick = () => {
    const comment = {
      id: comments.length + 1,
      user_nickname: userInfo.user_nickname,
      comment_content: msg,
    };
    const newComments = [comment, ...comments];
    setComments(newComments);
  };

  const handleChangeMsg = (e) => {
    setMsg(e.target.value);
  };

  // console.log("renderRecipe========",renderRecipe)
  const handleLikeClick = () => {
    axios
      .post(`https://muggerbar.ml/recipe/${renderRecipe.id}/like`)
      .then((res)=>{
        axios
          .get(`https://muggerbar.ml/recipe/${renderRecipe.id}/like`)
          .then((res)=>{
          console.log("get=========",res)
          setLike(res.data.data.like.likeCount)
    })
        console.log("post=========",res)
        // setLike(res.data.data.like.likeCount)
      })
  };

  const handleDelete = () => {
    // TODO: 삭제하기 버튼을 누르면 해당 게시물이 삭제되어야함
    // 서버에 post 요청을 보낸다.
    // 메인페이지로 리디렉션한다.
    // 모달창을 띄우고 확인버튼을 클릭 시 삭제 요청
    axios
      .delete(`https://muggerbar.ml/recipe/${renderRecipe.id}`, {
        accept : 'application/json', withCredentials: true, 
      })
      .then((res) => {
        console.log(res);
        history.push("/");
      });
    console.log("delete");
  };

  const showModalHandler = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    handleRenderingRecipe(clickNumRecipe);
  }, []);


  useEffect(()=>{
    takeRecipeUserNickName(renderRecipe.user_id)
  },)


  return (
    <div className="rp">
      <center>
        <div className="rp-container">
          <div className="rp-wrap title">
            <div className="rp-title">
              <div id="tt">{renderRecipe.recipe_title}</div>
              <div id="ss">{renderRecipe.recipe_subtitle}</div>
              <hr></hr>
              <div>
                <div className="rp-info">닉네임 : {recipeUserInfo}</div>
                <div className="rp-data">작성일 : {renderRecipe.createdAt}</div>
              </div>
              {userInfo.user_nickname === recipeUserInfo ? (
                <span className="rp-delete">
                  <button
                    className="btn-delete"
                    onClick={() => {
                      showModalHandler();
                    }}
                  >
                    삭제하기
                  </button>
                </span>
              ) : null}
            </div>
          </div>
          <div className="rp-wrap pic">
            <img
              src={`https://muggerbar.ml/${renderRecipe.recipe_photo}`}
              alt={renderRecipe.idx}
            />
          </div>
          <div className="rp-wrap">
            <div className="rp-desc">{renderRecipe.recipe_content}</div>
            <div className="r-likes">
              <div className="r-img" onClick={handleLikeClick}></div>
              <div className="r-c">{like}</div>
          </div>
        </div>
        <div className="rp-wrap ">
          <div className="r-title">댓글</div> <hr></hr>
          {comments.map((el) => {
            return <Comment key={el.id} comment={el} />;
          })}
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="rp-reply">
              <textarea id="" value={msg} placeholder="레시피가 마음에 드셨나요? 댓글을 남겨주세요." onChange={handleChangeMsg}></textarea>
              <button onClick={handleButtonClick}>등록</button>

      
              </div>
            </form>
          </div>
        </div>
      </center>
      {showModal ? <DeleteModal showModalHandler={showModalHandler} handleDelete={handleDelete} /> : null}
      <Footer />
    </div>
  );
}

export default Recipes;