import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";

axios.defaults.withCredentials = true;

function Login({ handleResponseSuccess }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [loginInfo, setLoginInfo] = useState({
    user_email: "",
    user_password: "",
  });

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  // console.log("loginInfo", loginInfo);

  const handleLogin = () => {
    console.log("login click");
    // 이메일 및 비밀번호를 입력하지 않았을 경우 에러를 표시해야 합니다.
    const { user_email, user_password } = loginInfo;
    if (user_email === "" || user_password === "") {
      setErrorMessage("이메일과 비밀번호를 정확히 입력해 주세요.");
    } else {
      axios
        .post("https://muggerbar.ml/login", {
          user_email: user_email,
          user_password: user_password,
        })
        .then((res) => {
          //console.log("res ???", res.status, "로그인성공");
          handleResponseSuccess();
        })
        .catch((err) => {
          //console.log("err message =>", err);
        });
    }
  };
  return (
    <div>
      <center>
        <div className="container">
          <div className="logo"></div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="login-wrap">
              <div className="login-inner">
                <div className="login-input">
                  <div className="login-icon">
                    <i class="far fa-envelope"></i>
                  </div>
                  <input
                    type="email"
                    className="login-text"
                    placeholder="email"
                    onChange={handleInputValue("user_email")}
                  ></input>
                </div>
                <div className="login-input">
                  <div className="login-icon">
                    <i class="fas fa-lock"></i>
                  </div>
                  <input
                    type="password"
                    className="login-text"
                    placeholder="password"
                    onChange={handleInputValue("user_password")}
                  ></input>
                </div>
                {errorMessage ? (
                  <div className="errmgs">{errorMessage}</div>
                ) : null}
                <button type="submit" id="btn-login" onClick={handleLogin}>
                  로그인
                </button>
                <div className="login-signup">
                  <Link to="/signup">회원가입</Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </center>
      <Footer />
    </div>
  );
}

export default Login;
