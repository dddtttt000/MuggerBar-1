import React, { useState } from "react";
import Mylist from "../components/Mylist";
import Footer from "../components/Footer";
import Withdrawal from "../components/Withdrawal";
import Navbar from "../components/Navbar";

function Mypage(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [clickToEdit, setClickToEdit] = useState(true);
  const [userinfo, setuserinfo] = useState({
    password: "",
    nickname: "",
  });
  console.log("mypage userinfo", userinfo);

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
      <Navbar />
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
                className="myinfo-props"
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
                className="myinfo-props"
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
                      <i class="fas fa-minus"></i>
                    ) : (
                      <i class="fas fa-plus"></i>
                    )}
                  </span>
                </button>
              </div>
            </div>
            {isOpen ? (
              <div className="my-inner-wrapper">
                <Mylist />
              </div>
            ) : null}
            <div className="btn-wrap">
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
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </center>
      {showModal ? <Withdrawal showModalHandler={showModalHandler} /> : null}
      <Footer />
    </div>
  );
}

export default Mypage;
