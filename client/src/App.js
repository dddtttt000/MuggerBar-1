import "./App.css";
import { Switch, Route, useHistory, Redirect, Link } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          hello
        </Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
      </Switch>
      <Link to="/login">로그인</Link>
    </div>
  );
}

export default App;
