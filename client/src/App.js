import "./App.css";
import { Switch, Route } from "react-router-dom";
import Mainpage from './pages/Mainpage';
import Posting from './pages/Posting';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import axios from 'axios';

function App() {

    // HA3-Client-App.js 참고.
    // const [isLogin, setIsLogin] = useState(false);
    // const [userinfo, setUserinfo] = useState(null);
    // const history = useHistory();
    // const isAuthenticated = () => {
    //   // TODO: 이제 인증은 성공했습니다. 사용자 정보를 호출하고, 이에 성공하면 로그인 상태를 바꿉시다.
    // };
    // const handleResponseSuccess = () => {
    //   isAuthenticated();
    // };
    // const handleLogout = () => {
    //   axios.post('https://localhost:4000/signout').then((res) => {
    //     setUserinfo(null);
    //     setIsLogin(false);
    //     history.push('/');
    //   });
    // };
  
    // useEffect(() => {
    //   isAuthenticated();
    // }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Mainpage}></Route>
        {/* <Route exact path="/" component={Mainpage} userinfo={userinfo} handleLogout={handleLogout}></Route> */}
        <Route path="/posting" component={Posting}></Route>
        <Route path="/login" component={Login}></Route>
        {/* <Route path="/login" component={Login} isLogin={isLogin} handleResponseSuccess={handleResponseSuccess}></Route> */}
        <Route path="/signup" component={Signup}></Route>
        
      </Switch>
    </div>
  );
}

export default App;