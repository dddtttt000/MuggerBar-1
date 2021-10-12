import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Posting from '../pages/Posting';

function PostingNav({handleposting}) {
  return (
    <div className="postingNav">
      <div className="logo-postingNav"></div>
        
      <div className="button-postingNav">
          <div className="postingBtn">
            <Link to="./contentsDetail"> 
              <button type="submit" className="postingBtn submit-btn-posting" onClick={()=>handleposting()}><i class="fas fa-download"></i> 저장하기</button>
            </Link>
          </div>
          
          <div className="mypageBtn">
            <Link to="./mypage">
            <button type="submit" className="mypageBtn mypage-btn">마이페이지</button>
            </Link>
          </div>

          <div className="logoutBtn">
            <button type="submit" className="logoutBtn logout-btn">로그아웃</button>
          </div>
      </div>
    </div>
  )
};

export default PostingNav;
