import React, { useState } from "react";
import { Link } from "react-router-dom";
import Test from "../components/Test";
import axios from "axios";

axios.defaults.withCredentials = true;

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    // 이메일 및 비밀번호를 입력하지 않았을 경우 에러를 표시해야 합니다.
    const { email, password } = loginInfo;
    if (email === "" || password === "") {
      setErrorMessage("이메일과 비밀번호를 정확히 입력해 주세요.");
    }
    // 서버에 로그인을 요청하고, props로 전달된 callback을 호출합니다.
  };
  return (
    <div>
      <center>
        <div className="container">
          <div className="logo">로고자리</div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="login-wrap">
              <input
                type="email"
                className="login-input"
                id="login-email"
                placeholder="email"
                onChange={handleInputValue("email")}
              ></input>

              <div>
                <input
                  type="password"
                  className="login-input"
                  id="login-password"
                  placeholder="password"
                  onChange={handleInputValue("password")}
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
                <Test />
              </div>
            </div>
          </form>
        </div>
      </center>
    </div>
  );
}

export default Login;
