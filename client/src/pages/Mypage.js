import React, { useState } from "react";
import Mylist from "../components/Mylist";

function Mypage(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [clickToEdit, setClickToEdit] = useState(true);
  const [userinfo, setuserinfo] = useState({
    password: "",
    nickname: "",
  });

  const handleUpdate = () => {
    // TODO: 유저 정보를 서버에 업데이트 요청하고, 성공한 경우 history.push("/")
  };

  const handleInputValue = (key) => (e) => {
    setuserinfo({ ...userinfo, [key]: e.target.value });
  };

  console.log("userinfo ??? ", userinfo);

  const clickToEditHandler = () => {
    setClickToEdit(!clickToEdit);
  };
  const showModalHandler = () => {
    setShowModal(!showModal);
  };

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
            {clickToEdit ? (
              <span className="myinfo-props">프랍스에서 받아온 정보</span>
            ) : (
              <input
                type="password"
                className=""
                placeholder="프랍스"
                onChange={handleInputValue("password")}
              ></input>
            )}
            <hr></hr>
            <span className="myinfo">닉네임</span>
            {clickToEdit ? (
              <span className="myinfo-props">프랍스에서 받아온 정보</span>
            ) : (
              <input
                type="text"
                className=""
                placeholder="props"
                onChange={handleInputValue("nickname")}
              ></input>
            )}
            <hr></hr>
            <div className="btn-wrap">
              <div>
                <button
                  type="button"
                  className={clickToEdit ? "my-btn" : "list"}
                  onClick={openHandler}
                >
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
              {clickToEdit ? (
                <div>
                  <button
                    type="button"
                    className="my-btn"
                    onClick={clickToEditHandler}
                  >
                    <p>개인정보 수정</p>
                  </button>
                </div>
              ) : (
                <div>
                  <button
                    type="submit"
                    className="my-btn"
                    onClick={handleUpdate}
                  >
                    <p>수정 완료</p>
                  </button>
                </div>
              )}
              {clickToEdit ? (
                <div>
                  <p className="getout" onClick={showModalHandler}>
                    회원탈퇴
                  </p>
                  {showModal ? "모달창이 뜬다!" : null}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </center>
    </div>
  );
}

export default Mypage;
