import "./App.css";
import { Switch, Route, useHistory, Redirect, Link } from "react-router-dom";
import Mainpage from './pages/Mainpage';
import Newrecipe from './pages/Newrecipe';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Mainpage />
        </Route>
        <Route path="/newrecipe">
          <Newrecipe />
        </Route>
      </Switch>
    </div>
  );
}

export default App;