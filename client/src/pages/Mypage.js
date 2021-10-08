import React, { useState } from "react";
import Mylist from "../components/Mylist";

function Mypage(props) {
  const [hasLists, setHasLists] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(!isOpen);
  };
  console.log("mypage props", props);
  return (
    <div>
      <span>네브 바 영역</span>
      <center>
        <div className="my-wrap">
          <span className="myinfo-top">
            내 정보<hr></hr>
          </span>

          <div className="my-inner-wrap">
            <div className="">
              <span className="myinfo">이메일</span>
              <span className="myinfo-props">프랍스에서 받아온 정보</span>
            </div>
            <hr></hr>
            <span className="myinfo">비밀번호</span>
            <span className="myinfo-props">프랍스에서 받아온 정보</span>
            <hr></hr>
            <span className="myinfo">닉네임</span>
            <span className="myinfo-props">프랍스에서 받아온 정보</span>
            <hr></hr>
            <div className="btn-wrap">
              <div>
                <button type="button" className="my-btn" onClick={openHandler}>
                  내가 쓴 글 목록
                  <span id="plus">
                    {isOpen ? (
                      <>
                        <i class="fas fa-minus"></i>
                        <Mylist />
                      </>
                    ) : (
                      <>
                        <i class="fas fa-plus"></i>
                      </>
                    )}
                  </span>
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="my-btn"
                  onClick={() => console.log("인풋창으로 바껴야함")}
                >
                  개인정보 수정
                </button>
              </div>
              <div>
                <p
                  className="getout"
                  onClick={() => console.log("모달팝업해야함")}
                >
                  회원탈퇴
                </p>
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}

export default Mypage;
