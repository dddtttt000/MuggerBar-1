import "./App.css";
import { Switch, Route, useHistory, Redirect, Link } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Newrecipe from "./pages/Newrecipe";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Mainpage />
        </Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/mypage" component={Mypage}></Route>
        <Route path="/newrecipe">
          <Newrecipe />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
