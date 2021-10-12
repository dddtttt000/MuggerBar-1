import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import WelcomeModal from "../components/WelcomeModal";
import Footer from "../components/Footer";

axios.defaults.withCredentials = true;

function Signup() {
  const [userinfo, setuserinfo] = useState({
    user_email: "",
    user_password: "",
    passwordCheck: "",
    user_nickname: "",
  });
  //console.log("signup userinfo ???", userinfo);
  const history = useHistory();

  const [passwordErrMessage, setPasswordErrMessage] = useState("");
  const [passwordCheckErrMessage, setPasswordCheckErrMessage] = useState("");
  //const [nicknameErrMessage, setNicknameErrMessage] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  // 회원가입 성공 시 웰컴 모달 보여주기

  const showModalHandler = () => {
    setShowModal(!showModal);
  };

  const handleInputValue = (key) => (e) => {
    setuserinfo({ ...userinfo, [key]: e.target.value });
  };

  const handleSignup = () => {
    // 비밀번호 유효성 검사 함수
    function strongPassword(str) {
      return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        str
      );
    }
    const { user_email, user_password, passwordCheck, user_nickname } =
      userinfo;
    // 모든 항목을 입력하지 않았을 경우 에러를 표시해야 합니다.
    if (!user_email || !user_password || !passwordCheck || !user_nickname) {
      setErrMessage("필수 정보입니다.");
    }

    // 유효성검사 에러 메세지 표시
    else if (!strongPassword(userinfo.user_password)) {
      setPasswordErrMessage("8자 이상, 영문, 숫자 및 특수문자를 사용하세요");
    }

    // 비밀번호 재확인 에러 메세지 표시
    else if (userinfo.user_password !== userinfo.passwordCheck) {
      setPasswordCheckErrMessage("비밀번호가 일치하지 않습니다.");
    }

    // TODO: 닉네임 유효성 검사
    // 서버에서 이미 있는 닉네임인 경우 에러 메세지를 표시
    // TODO: 서버에 회원가입을 요청 후 로그인 페이지로 이동하세요.

    // TODO: 회원가입 성공 시 모달 창 띄우고 확인 버튼 누르면 로그인페이지로 이동
    else {
      console.log("signup click");
      setErrMessage("");
      setPasswordErrMessage("");

      axios
        .post("https://muggerbar.ml/signup", {
          user_email: user_email,
          user_password: user_password,
          user_nickname: user_nickname,
        })
        .then((res) => {
          //console.log("res data ???", res.data.message);
          console.log("가입완료");
          showModalHandler();
          // history.push("/login");
        })
        .catch((err) => {
          console.log("err message =>", err);
        });
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
                  onChange={handleInputValue("user_email")}
                />
                <div className="err-box">{errMessage}</div>
              </div>
              <div className="signup-box">
                <div className="signup-text">비밀번호</div>
                <input
                  className="signup-input"
                  type="password"
                  onChange={handleInputValue("user_password")}
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
                  onChange={handleInputValue("user_nickname")}
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
