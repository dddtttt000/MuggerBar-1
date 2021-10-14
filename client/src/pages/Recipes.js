import React, { Component, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Comment from "../components/Comment";
import DeleteModal from "../components/DeleteModal";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

axios.defaults.withCredentials = true;

function Recipes({ totalRecipes, clickNumRecipe, userInfo }) {
  const [comments, setComments] = useState([]);
  const [commentContent, setCommentContent] = useState("");
  const [msg, setMsg] = useState("");
  const [like, setLike] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [recipeUserInfo, setRecipeUserInfo] = useState("");
  const [renderRecipe, setRenderRecipe] = useState({});

  const history = useHistory();

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

  // TODO: 서버에서 댓글 불러오기
  const getComments = () => {
    console.log("renderRecipe.id = ", clickNumRecipe)
    axios
      .get(
        `https://muggerbar.ml/comment?recipe_id=${clickNumRecipe}`,
        {
          withCredentials: true,
        },
        { accept: "application/json" }
      )
      .then((res) => {
        // console.log("get success", res);
        setComments(res.data.data.comment);
      });
  };

  // 서버에 댓글 등록 post 요청 후 성공 시 댓글 목록에 포함
  const postComment = () => {
    axios
      .post(
        "https://muggerbar.ml/comment",
        {
          recipe_id: renderRecipe.id,
          comment_content: msg,
        },
        { accept: "application/json" }
      )
      .then((res) => {
        console.log("post success =>", res.data.data.comment);
        setCommentContent(res.data.data.comment);
        setMsg("");
        history.push("/recipes");
        // getComments();
      });
  };
  // console.log("댓글 post가 완료된 commentContent => ", commentContent);
  // console.log("get 요청으로 불러온 댓글들 =>", comments);


  // 댓글 내용을 msg 에 넣어주는 함수
  const handleChangeMsg = (e) => {
    setMsg(e.target.value);
  };

  // console.log("renderRecipe========",renderRecipe)
  const handleLikeClick = () => {
    axios
      .post(`https://muggerbar.ml/recipe/${renderRecipe.id}/like`)
      .then((res)=>{
        handleLikeCount()
        console.log("post=========",res)
        // setLike(res.data.data.like.likeCount)
      });
  };

  const handleLikeCount = () =>{
    axios
        .get(`https://muggerbar.ml/recipe/${renderRecipe.id}/like`)
        .then((res)=>{
        console.log("get=========",res)
        setLike(res.data.data.like.likeCount)
    })
  }

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
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("delete");
  };

  const showModalHandler = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    console.log("첫번쨰 useEffect")
    getComments();
  }, []);

  useEffect(() => {
    console.log("두번쨰 useEffect")
    getComments();
  }, [commentContent]);

  useEffect(() => {
    handleRenderingRecipe(clickNumRecipe);
    takeRecipeUserNickName(renderRecipe.user_id);
    handleLikeCount();
  });

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
              <div className="r-img" onClick={()=>handleLikeClick()}></div>
              <div className="r-c">{like}</div>
            </div>
          </div>
<<<<<<< HEAD
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
=======
          <div className="rp-wrap ">
            <div className="r-title">댓글</div> <hr></hr>
            {comments.map((el) => {
              return <Comment key={el.id} comment={el} />;
            })}
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="rp-reply">
                <textarea
                  id=""
                  value={msg}
                  placeholder="레시피가 마음에 드셨나요? 댓글을 남겨주세요."
                  onChange={handleChangeMsg}
                ></textarea>
                <button onClick={postComment}>등록</button>
>>>>>>> 0be888620574a134eb6d316feca204a08a92cd05
              </div>
            </form>
          </div>
        </div>
      </center>
      {showModal ? (
        <DeleteModal
          showModalHandler={showModalHandler}
          handleDelete={handleDelete}
        />
      ) : null}
      <Footer />
    </div>
  );
}

export default Recipes;
