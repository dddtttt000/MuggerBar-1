import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import WelcomeModal from "../components/WelcomeModal";

axios.defaults.withCredentials = true;

function Signup() {
  const [userinfo, setuserinfo] = useState({
    email: "",
    password: "",
    passwordCheck: "",
    nickname: "",
  });
  const history = useHistory();
  // const [emailErrMessage, setEmailErrMessage] = useState("");
  const [passwordErrMessage, setPasswordErrMessage] = useState("");
  const [passwordCheckErrMessage, setPasswordCheckErrMessage] = useState("");
  const [nicknameErrMessage, setNicknameErrMessage] = useState("");
  const [errMessage, setErrMessage] = useState("");
  // 회원가입 성공 시 웰컴 모달 보여주기
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(!showModal);
  };

  const handleInputValue = (key) => (e) => {
    setuserinfo({ ...userinfo, [key]: e.target.value });
  };

  const handleSignup = () => {
    // TODO: 서버에 회원가입을 요청 후 로그인 페이지로 이동하세요.

    // TODO: 회원가입 성공 시 모달 창 띄우고 확인 버튼 누르면 로그인페이지로 이동
    showModalHandler();

    const { email, password, passwordCheck, nickname } = userinfo;
    // 모든 항목을 입력하지 않았을 경우 에러를 표시해야 합니다.
    if (!email || !password || !passwordCheck || !nickname) {
      setErrMessage("필수 정보입니다.");
    }

    // 비밀번호 유효성 검사 함수
    function strongPassword(str) {
      return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        str
      );
    }

    // 유효성검사 에러 메세지 표시
    if (!strongPassword(userinfo.password)) {
      setPasswordErrMessage("8자 이상, 영문, 숫자 및 특수문자를 사용하세요");
    } else {
      setPasswordErrMessage("");
    }

    // 비밀번호 재확인 에러 메세지 표시
    if (userinfo.password !== userinfo.passwordCheck) {
      setPasswordCheckErrMessage("비밀번호가 일치하지 않습니다.");
    } else {
      setPasswordCheckErrMessage("");
    }

    // TODO: 닉네임 유효성 검사
    // 서버에서 이미 있는 닉네임인 경우 에러 메세지를 표시

    // 모든 입력이 완료 된 경우 에러 메세지를 없앤다.
    if (email && password && passwordCheck && nickname) {
      setErrMessage("");
    }
  };

  return (
    <div>
      <center>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="container">
            <div className="logo-signup"></div>
            <div className="signup-wrap">
              <div className="signup-box">
                <div className="signup-text">이메일</div>
                <input
                  className="signup-input"
                  type="email"
                  onChange={handleInputValue("email")}
                />
                <div className="err-box">{errMessage}</div>
              </div>
              <div className="signup-box">
                <div className="signup-text">비밀번호</div>
                <input
                  className="signup-input"
                  type="password"
                  onChange={handleInputValue("password")}
                />
                <div className="err-box">{passwordErrMessage}</div>
              </div>
              <div className="signup-box">
                <div className="signup-text">비밀번호 재확인</div>
                <input
                  className="signup-input"
                  type="password"
                  onChange={handleInputValue("passwordCheck")}
                />
                <div className="err-box">{passwordCheckErrMessage}</div>
              </div>
              <div className="signup-box">
                <div className="signup-text">닉네임</div>
                <input
                  className="signup-input"
                  type="text"
                  onChange={handleInputValue("nickname")}
                />
                <div className="err-box">{errMessage}</div>
              </div>
              <div className="signup-btn">
                <button
                  type="submit"
                  className="btn btn-signup"
                  onClick={handleSignup}
                >
                  가입하기
                </button>
              </div>
            </div>
          </div>
        </form>
      </center>
      {showModal ? <WelcomeModal /> : null}
    </div>
  );
}

export default Signup;
