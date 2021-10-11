import React, { useState } from "react";
import MainNav from "../components/MainNav";
import Footer from "../components/Footer";
import Comment from "../components/Comment";
import dummyComments from "../dummy/comments";

function Recipes({ userInfo }) {
  const [comments, setComments] = useState(dummyComments);
  const [msg, setMsg] = useState("");
  const [like, setLike] = useState(0);
  const [isClick, setIsClick] = useState(false);

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

  return (
    <div className="rp">
      <center>
        <MainNav />
        <div className="rp-wrap title">
          타이틀공간
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
            <div>
              <button className="rp-delete">삭제하기</button>
            </div>
          </div>
        </div>
        <div className="rp-wrap pic">이미지 불러와서 띄우기</div>
        <div className="rp-wrap desc">
          본문 텍스트 불러오기
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
      <Footer />
    </div>
  );
}

export default Recipes;
