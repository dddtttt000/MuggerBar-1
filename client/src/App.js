import React, { useEffect, useState } from "react";
import "./App.css";
import { Switch, Route, useHistory, Redirect, Link } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Posting from "./pages/Posting";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";
import Recipes from "./pages/Recipes";

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Mainpage}></Route>
        {/* <Route exact path="/" component={Mainpage} userinfo={userinfo} handleLogout={handleLogout}></Route> */}
        <Route path="/posting" component={Posting}></Route>
        <Route exact path="/">
          <Mainpage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/mypage">
          <Mypage userInfo={userInfo} />
        </Route>
        <Route path="/Posting">
          <Posting />
        </Route>
        <Route path="/recipes">
          <Recipes userInfo={userInfo} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
