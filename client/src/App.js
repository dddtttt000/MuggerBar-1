import React, { useEffect, useState } from "react";
import "./App.css";
import { Switch, Route, useHistory, Redirect, Link } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Posting from "./pages/Posting";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Mypage from "./pages/Mypage";
import Recipes from "./pages/Recipes";
import MainNav from "./components/MainNav";
import Footer from "./components/Footer";
import axios from "axios";
import dummyUserInfo from "./dummy/userInfo";

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [recipes, setRecipes] = useState([]); // 내가 쓴 레시피 모음

  const [receivedRecipe, setReceivedRecipe] = useState([]);
  const [totalRecipes, setTotalRecipe] = useState([]);
  const [clickNumRecipe, setClickNumRecipe] = useState(0);

  const handleClickNumRecipe = (recipe) => {
    // console.log(recipe)
    setClickNumRecipe(recipe);
  };

  const isSearchingRecipe = (arr, text) => {
    return arr.filter((ele) => {
      return ele.recipe_title.includes(text);
    });
  };

  const handleSetRecipe = (searchText) => {
    const searchedRecipe = isSearchingRecipe(totalRecipes, searchText);
    setTotalRecipe(searchedRecipe);
  };

  const handleResetRecipe = () => {
    setTotalRecipe(receivedRecipe);
  };

  // 레시피 게시물 전부 불러오는 함수
  const handleGetRecipe = () => {
    axios
      .get("https://muggerbar.ml/recipe", null, {
        headers: { Accept: "application/json" },
      })
      .then((res) => {
        setReceivedRecipe(res.data.data.recipe);
        setTotalRecipe(res.data.data.recipe);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleGetRecipe();
  }, []);

  const history = useHistory();

  // TODO: 서버에 유저정보 get 요청 후 로그인 상태 변경
  const isAuthenticated = () => {
    // TODO: 이제 인증은 성공했습니다. 사용자 정보를 호출하고, 이에 성공하면 로그인 상태를 바꿉시다.
    axios
      .get("https://muggerbar.ml/userinfo", { withCredentials: true })
      .then((res) => {
        //console.log(res.data.data.userInfo);
        setUserInfo(res.data.data.userInfo);
        setIsLogin(true);
        history.push("/");
      })
      .catch((err) => console.log("err messege =>", err));
  };
  const handleResponseSuccess = () => {
    isAuthenticated();
  };
  const handleLogout = () => {
    axios.post("https://muggerbar.ml/logout").then((res) => {
      setUserInfo(null);
      setIsLogin(false);
      history.push("/");
    });
  };

  // TODO: 서버에 내가 쓴 레시피만 요청해서 받아오기
  const getRecipeLists = () => {
    // https://muggerbar.ml/recipe
    // 성공한 경우
    // setRecipeList(data)
    if (!userInfo) {
      return;
    } else {
      axios
        .get(`https://muggerbar.ml/recipe/user_id=${userInfo.user_id}`)
        .then((data) => {
          console.log("getRecipeLists data", data);
          setRecipes(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  useEffect(() => {
    getRecipeLists();
    isAuthenticated();
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <MainNav isLogin={isLogin} handleLogout={handleLogout} />
          <Mainpage
            userInfo={userInfo}
            isLogin={isLogin}
            handleSetRecipe={handleSetRecipe}
            handleResetRecipe={handleResetRecipe}
            totalRecipes={totalRecipes}
            handleClickNumRecipe={(e) => handleClickNumRecipe(e)}
          />
          <Footer />
        </Route>
        <Route path="/login">
          <Login handleResponseSuccess={handleResponseSuccess} />
          <Footer />
        </Route>
        <Route path="/signup">
          <Signup isLogin={isLogin} />
          <Footer />
        </Route>
        <Route path="/mypage">
          <MainNav isLogin={isLogin} handleLogout={handleLogout} />
          <Mypage userInfo={userInfo} totalRecipes={totalRecipes} />
          <Footer />
        </Route>
        <Route path="/posting">
          <Posting />
          <Footer />
        </Route>
        <Route path="/recipes">
          <MainNav isLogin={isLogin} handleLogout={handleLogout} />
          <Recipes
            totalRecipes={totalRecipes}
            clickNumRecipe={clickNumRecipe}
          />
          ;
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
