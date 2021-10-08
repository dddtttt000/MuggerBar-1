import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


function Navbar() {
  
  const [login, setLogin] = useState(false); // 로그인 버튼을 위한 state

  return (
    <>
      <div className="navbar">
        <img id="logo" src="https://user-images.githubusercontent.com/79240270/136352271-750f6b72-e5ff-46c7-9e98-68635a631688.png" alt="Navbar-mainpage" />
        
        <span id="newrecipe-button"> {/* 나란히 정렬해두려고 임시로 span에 담음. 추후 수정. */}
          <Link to="./newrecipe">
          <button>📝 레시피 등록</button>{/* Newrecipe페이지로 이동하면, "저장"버튼으로 바뀌어야 함 */}
          </Link>
        </span>
        
        <span id="befor-login">
          <Link to="./login">
            <button>로그인</button>
          </Link>
          <Link to="./signup">
            <button>회원가입</button>
          </Link>
        </span>

        <div className="after-login"> {/* 나란히 안두려고 임시로 div로 묶어둠 */}
          <button onClick={ () => {setLogin(!login)} }>로그아웃</button> {/* // ! -->클릭시 로그아웃 되고, 로그인으로 바뀌게 수정하기*/}
          {
            login === true
            ? "손님으로 이용중"
            : null
          } 
          <Link to="./mypage">
            <button>마이페이지</button>
          </Link>
        </div>
    </div>
    </>
  )
}


export default Navbar

