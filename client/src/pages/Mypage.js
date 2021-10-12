import React, { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Mylist from "../components/Mylist";
import Footer from "../components/Footer";
import Withdrawal from "../components/Withdrawal";
import MainNav from "../components/MainNav";
import dummyRecipes from "../dummy/recipelist";
import axios from "axios";

axios.defaults.withCredentials = true;

function Mypage({ userInfo }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [clickToEdit, setClickToEdit] = useState(true);
  const [userinfo, setuserinfo] = useState({
    password: "",
    nickname: "",
  });
  const [recipeList, setRecipeList] = useState(dummyRecipes);
  const [hasLists, setHasLists] = useState(recipeList.length);
  const history = useHistory();

  console.log("haslists", hasLists);
  console.log("dummy", recipeList);
  console.log("props userinfo", userInfo);

  // TODO: recipe list 를 서버에 요청해서 받아온다.
  // req.query.user_id 내가 쓴 게시물 목록 반환
  const getRecipeLists = () => {
    // https://muggerbar.ml/recipe
    // 성공한 경우
    // setRecipeList(data)
  };

  const handleUpdate = () => {
    // TODO: 유저 정보를 서버에 업데이트 요청하고, 성공한 경우
    setClickToEdit(true);
    console.log("userinfo update");
  };

  const handleInputValue = (key) => (e) => {
    setuserinfo({ ...userinfo, [key]: e.target.value });
  };

  const clickToEditHandler = () => {
    setClickToEdit(!clickToEdit);
    setIsOpen(false);
  };
  const showModalHandler = () => {
    setShowModal(!showModal);
  };

  const openHandler = () => {
    setIsOpen(!isOpen);
  };
  console.log("mypage userInfo", userInfo);

  // TODO: 회원탈퇴 모달에서 '네' 클릭 시 서버에 post 요청 후 메인페이지로 리디렉션
  const withdrawHandler = () => {
    axios.post("/signout", {
      id: userInfo.id,
    });
    history.push("/");
  };

  return (
    <div>
      <MainNav />
      <center>
        <div className="my-wrap">
          <span className="myinfo-top">
            내 정보<hr></hr>
          </span>

          <div className="my-inner-wrap">
            <div className="">
              <span className="myinfo">이메일</span>
              <span className="myinfo-props">{userInfo.user_email}</span>
            </div>
            <hr></hr>
            <span className="myinfo">비밀번호</span>
            {clickToEdit ? (
              <span className="myinfo-props">*****</span>
            ) : (
              <input
                type="password"
                className="myinfo-props"
                placeholder="변경하실 비밀번호를 입력해 주세요."
                onChange={handleInputValue("password")}
              ></input>
            )}
            <hr></hr>
            <span className="myinfo">닉네임</span>
            {clickToEdit ? (
              <span className="myinfo-props">{userInfo.user_nickname}</span>
            ) : (
              <input
                type="text"
                className="myinfo-props"
                placeholder={userInfo.user_nickname}
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
                {/* <Mylist recipeList={recipeList} /> */}
                {hasLists !== 0 ? (
                  recipeList.map((el) => {
                    return <Mylist recipeList={el} key={el.id} />;
                  })
                ) : (
                  <div className="my-inner-wrap-msg">
                    레시피를 등록해 주세요.
                  </div>
                )}
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
      {showModal ? (
        <Withdrawal
          showModalHandler={showModalHandler}
          withdrawHandler={withdrawHandler}
        />
      ) : null}
      <Footer />
    </div>
  );
}

export default Mypage;
