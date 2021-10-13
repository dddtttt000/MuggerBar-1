import React, { useState } from "react";
import Footer from "../components/Footer";
import Comment from "../components/Comment";
import dummyComments from "../dummy/comments";
import DeleteModal from "../components/DeleteModal";
import axios from "axios";
axios.defaults.withCredentials = true;

function Recipes({ userInfo }) {
  const [comments, setComments] = useState(dummyComments);
  const [commentContent, setCommentContent] = useState("");
  const [msg, setMsg] = useState("");
  const [like, setLike] = useState(0);
  const [isClick, setIsClick] = useState(false);
  const [isMyContent, setIsMyContent] = useState(false);
  const [showModal, setShowModal] = useState(false);

  console.log("recipe props userInfo", userInfo);
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
      user_nickname: "userInfo.user_nickname",
      comment_content: msg,
    };
    const newComments = [comment, ...comments];
    setComments(newComments);
  };

  const handleChangeMsg = (e) => {
    setMsg(e.target.value);
  };

  const handleLikeClick = () => {
    setLike(like + 1);
    setIsClick(true);
  };

  const handleUnlikeClick = () => {
    setLike(like - 1);
    setIsClick(false);
  };

  const handleDelete = () => {
    // TODO: 삭제하기 버튼을 누르면 해당 게시물이 삭제되어야함
    // 서버에 post 요청을 보낸다.
    // 메인페이지로 리디렉션한다.
    // 모달창을 띄우고 확인버튼을 클릭 시 삭제 요청
    console.log("delete");
  };
  const showModalHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="rp">
      <center>
        <div className="rp-wrap title">
          <div className="rp-title">
            <div>제목</div>
            <div>한줄설명</div>
            <hr></hr>
            <div>
              <span className="rp-info">작성한 사람 닉네임</span>
              <span className="rp-data">작성 날짜 및 시간</span>
            </div>
            <div>
              <span className="rp-category">카테고리</span>
              <span className="rp-category-value">선택한것</span>
            </div>

            {isMyContent ? (
              <span className="rp-delete">
                <button className="btn-delete" onClick={showModalHandler}>
                  삭제하기
                </button>
              </span>
            ) : null}
          </div>
        </div>
        <div className="rp-wrap pic">이미지 불러와서 띄우기</div>
        <div className="rp-wrap">
          <div className="rp-desc">본문 텍스트 불러오기</div>
          <div className="r-likes">
            <div
              className="r-img"
              onClick={isClick === false ? handleLikeClick : handleUnlikeClick}
            ></div>
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
              <textarea
                id=""
                value={msg}
                placeholder="레시피가 마음에 드셨나요? 댓글을 남겨주세요."
                onChange={handleChangeMsg}
              ></textarea>
              <button onClick={handleButtonClick}>등록</button>
            </div>
          </form>
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
