import React, { useEffect, useState } from "react";
import "./App.css";
import { Switch, Route, useHistory, Redirect, Link } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Newrecipe from "./pages/Newrecipe";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Mainpage />
        </Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/mypage">
          <Mypage userInfo={userInfo} />
        </Route>
        <Route path="/newrecipe">
          <Newrecipe />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
