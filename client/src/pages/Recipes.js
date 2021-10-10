import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Recipes() {
  return (
    <div className="rp">
      <center>
        <Navbar />
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
          </div>
        </div>
        <div className="rp-wrap pic">이미지 불러와서 띄우기</div>
        <div className="rp-wrap desc">본문 텍스트 불러오기</div>
        <div className="rp-wrap reply">
          <div>댓글</div> <hr></hr>
          <div className="r-box">
            <div>닉네임</div>
            <div>댓글내용</div> <hr></hr>
          </div>
          <div className="rp-reply">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="레시피가 마음에 드셨나요? 댓글을 남겨주세요."
            ></textarea>
            <button>등록</button>
          </div>
        </div>
      </center>
      <Footer />
    </div>
  );
}

export default Recipes;
