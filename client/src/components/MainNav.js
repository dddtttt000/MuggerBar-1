import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


function MainNav() {
  
  const [login, setLogin] = useState(false); // 로그인 버튼을 위한 state

  return (
    <>
      <div className="mainNav">
        <div className="logo-mainNav"></div>
          <div className="button-mainNav">

            <div className="mainBtn"> 
              <Link to="./posting">
                <button type="submit" className="mainBtn main-btn-posting">레시피 등록</button>
              </Link>
            </div>            
            
            <div className="mainBtn">
              <Link to="./login">
                <button type="submit" className="mainBtn before-login-btn">로그인</button></Link>
            </div>
            
            <div className="mainBtn">
              <Link to="./signup">
                <button type="submit" className="mainBtn before-signup-btn">회원가입</button></Link>
            </div>
          
          </div>
      </div>


        {/* <div className="after-login"> 나란히 안두려고 임시로 div로 묶어둠 */}
          {/* <button onClick={ () => {setLogin(!login)} }>로그아웃</button> // ! -->클릭시 로그아웃 되고, 로그인으로 바뀌게 수정하기 */}
          {/* { */}
            {/* login === true */}
            {/* ? "손님으로 이용중" */}
            {/* : null */}
          {/* }  */}
          {/* <Link to="./mypage"> */}
            {/* <button>마이페이지</button> */}
          {/* </Link> */}
        {/* </div> */}
    
    </>
  )
}


export default MainNav;

